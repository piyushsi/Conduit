import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import axios from 'axios';

const Register = () => {
  let username = React.useRef(null);
  let email = React.useRef(null);
  let password = React.useRef(null);

  function handleLogin(e) {
    e.preventDefault();
    fetch("https://conduit.productionready.io/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value
        }
      })
    })
      .then(res => res.json())
      .then(userData => console.log(userData));
  }
  return (
    <main className="login_s">
      <div>
        <form className="form">
          <h1>Register</h1>
          <h5>Register to get the products</h5>
          <div className="btn-box">
            <NavLink className="btn btn-link" to="/login">
              Login
            </NavLink>
          </div>
          <NavLink to="/register">Forget Password</NavLink>
          <hr className="sep" />
          <div className="group">
            <input
              name="username"
              className="input"
              type="text"
              required="required"
              ref={username}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>UserName</label>
          </div>
          <div className="group">
            <input
              name="email"
              className="input"
              type="text"
              required="required"
              ref={email}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>
          <div className="group">
            <input
              name="password"
              className="input"
              type="password"
              required="required"
              ref={password}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Password</label>
          </div>

          <div className="btn-box">
            <button
              className="btn btn-submit"
              type="submit"
              onClick={handleLogin}
            >
              submit
            </button>
            <button className="btn btn-cancel" type="button">
              reset
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
export default Register;
