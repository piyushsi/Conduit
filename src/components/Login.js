import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

const Login = props => {
  let email = React.useRef(null);
  let password = React.useRef(null);

  function handleLogin(e) {
    e.preventDefault();
    fetch("https://conduit.productionready.io/api/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: { email: email.current.value, password: password.current.value }
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.errors) {
          localStorage.setItem("isLoggedIn", false);
        } else {
          localStorage.setItem("isLoggedIn", true);
          props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <main className="login_s">
      <div>
        <form className="form">
          <h1>Login</h1>
          <h5>Enter your Login Details</h5>
          <div className="btn-box">
            <a className="btn btn-link" href="" target="_blank">
              Login with Google
            </a>
          </div>
          <NavLink to="/admin">Login as Admin</NavLink>
          <hr className="sep" />
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
export default withRouter(Login);
