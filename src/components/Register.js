import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import axios from 'axios';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      style: "active",
      username: null,
      email: null,
      password: null,
      imageurl: null
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //     handleRegister=(e)=>{
  //       e.preventDefault();
  // axios.post("/api/v1/users/register",{
  //       username:this.state.username,
  //       email:this.state.email,
  //       password:this.state.password,
  //       imageurl:this.state.imageurl
  //     }).then(user => window.location.href = '/login')

  // fetch("/api/v1/users/register",{
  //   method:"POST",
  //   headers:{
  //     "content-type":"application/json"
  //   },
  //   body:JSON.stringify({
  //     username:this.state.username,
  //     email:this.state.email,
  //     password:this.state.password,
  //     imageurl:this.state.imageurl
  //   })
  // }).then(res => res.json()).then(user => console.log(user))

  // }

  render() {
    return (
      <main className="login_s">
        <div>
          <form className="form" onSubmit={this.handleRegister}>
            <h1>Register</h1>
            <h5>Register to get the products</h5>
            <div class="btn-box">
              <NavLink class="btn btn-link" to="/login">
                Login
              </NavLink>
            </div>
            <NavLink to="/register">Forget Password</NavLink>
            <hr class="sep" />
            <div class="group">
              <input
                name="username"
                onChange={this.handleChange}
                className="input"
                type="text"
                required="required"
              />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Name</label>
            </div>
            <div class="group">
              <input
                name="email"
                onChange={this.handleChange}
                className="input"
                type="text"
                required="required"
              />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Email</label>
            </div>
            <div class="group">
              <input
                name="password"
                onChange={this.handleChange}
                className="input"
                type="password"
                required="required"
              />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
            </div>
            <div class="group">
              <input
                name="imageurl"
                onChange={this.handleChange}
                className="input"
                type="url"
                required="required"
              />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Image Url</label>
            </div>
            {/* <div class="group">
      <input className='input' type="number" required="required"/><span class="highlight"></span><span class="bar"></span>
      <label>Number</label>
    </div> */}
            {/* <div class="group">
      <textarea type="textarea" rows="5" required="required"></textarea><span class="highlight"></span><span class="bar"></span>
      <label>Message</label>
    </div> */}
            <div class="btn-box">
              <button class="btn btn-submit" type="submit">
                submit
              </button>
              <button class="btn btn-cancel" type="button">
                reset
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}
export default Register;
