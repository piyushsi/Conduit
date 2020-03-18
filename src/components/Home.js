import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = { data: null, tags: null, null: null };
  }
  tags = t => {
    fetch(
      `https://conduit.productionready.io/api/articles?limit=10&offset=0&tag=${t.t}`
    )
      .then(res => res.json())
      .then(articles =>
        this.setState({
          data: articles
        })
      );
  };
  componentDidMount() {
    fetch("https://conduit.productionready.io/api/articles?limit=12&offset=0")
      .then(res => res.json())
      .then(articles =>
        this.setState({
          data: articles
        })
      );
    fetch("https://conduit.productionready.io/api/tags")
      .then(res => res.json())
      .then(tags =>
        this.setState({
          tags: tags
        })
      );
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="card_art">
        <div className="home_box">
          <h1>Conduit</h1>
          <h2>A place to share your knowledge.</h2>
        </div>
        <div className="button hoverable">
          <div className="anim"></div>
          <div>Global Feed</div>
        </div>
        <br />

        <div className="tags">
          <span className="tag">Tags</span>
          <div className="all_tags">
            {this.state.tags &&
              this.state.tags.tags.map(t => {
                return (
                  <span
                    onClick={() =>
                      this.tags({ t }) &&
                      this.setState({ null: null })
                    }
                  >
                    {t}
                  </span>
                );
              })}
          </div>
        </div>

        <div className="card_article">
          {this.state.data &&
            this.state.data.articles.map(a => {
              return (
                <div className="card card-1">
                  <div className="articles_tags">
                    <span>{a.author.username}</span>
                  </div>
                  <span className="date">
                    {a.createdAt
                      .split("T")
                      .join("/")
                      .substring(0, 19)}
                  </span>
                  <div className="inner_card">
                    <h2>{a.title}</h2>
                    <h4>{a.description}</h4>
                  </div>

                  <button class="button_x slide">&nbsp;</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default Home;
