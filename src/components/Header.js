import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a className="navbar-brand" href="/">
              Conduit
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              {Boolean(localStorage.isLoggedIn) ? (
                <>
                  <li>
                    <NavLink to="/">HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile">PROFILE</NavLink>
                  </li>
                  <li>
                    <NavLink to="/setting">SETTING</NavLink>
                  </li>
                  <li>
                    <NavLink to="/" onClick={localStorage.clear()}>
                      Log out
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/">HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">REGISTER</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">LOGIN</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
