import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Article extends Component {
  constructor() {
    super();
    this.state = { data: null, null: null };
  }
  tags = t => {
    fetch(
      `https://conduit.productionready.io/api/articles/article-2-lknqyq`
    )
      .then(res => res.json())
      .then(articles =>
        this.setState({
          data: articles
        })
      );
  };
  componentDidMount() {
    fetch(
        `https://conduit.productionready.io/api/articles/the-sole-reason-people-are-writing-posts-here-because-they-need-to-be-convinced-the-code-actually-works-282xh9`
      )
        .then(res => res.json())
        .then(articles =>
          this.setState({
            data: articles
          })
        );
  }
  render() {
    return (
      <div className="card_art">
        <div className="home_box">
          <h1>Conduit</h1>
          <h2>A place to share your knowledge.</h2>
        </div>
        <div className="button hoverable">
          <div className="anim"></div>
          <div>Single Feed</div>
        </div>
        <br />


        <div className="card_article">
                <div className="card card-1 full_card">
                  <div className="articles_tags">
                    <span>{this.state.data && this.state.data.article.author.username}</span>
                  </div>
                  <span className="date">
                    {this.state.data && this.state.data.article.createdAt
                      .split("T")
                      .join("/")
                      .substring(0, 19)}
                  </span>
                  <div className="inner_card">
                    <h2>{this.state.data && this.state.data.article.title}</h2>
                    <h4>{this.state.data &&this.state.data.article.description}</h4>

                  </div>

                </div>
        </div>
      </div>
    );
  }
}
export default Article;
