import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./home.js";
import Profile from "./profile.js";
import NoMatch from "./nomatch.js";
import { scaleDown as Menu } from "react-burger-menu";

class Routes extends Component {
  render() {
    return (
      <div id="outer-container">
        <Menu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
        >
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </Menu>
        <main id="page-wrap">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Routes;
