import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Article from "./components/Article";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/sidebar">
          <Sidebar />
        </Route>

        <Route path="/article">
          <Article />
        </Route>
      </Switch>
    </>
  );
}

export default App;
