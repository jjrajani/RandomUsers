import React from "react";
import { Header, UsersGrid, UsersStats } from "../";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="app-content">
          <Route path="/grid" component={UsersGrid} />
          <Route path="/" exact component={UsersStats} />
        </div>
        <footer>
          <a
            className="App-link"
            href="https://jjrajani.github.io/#/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jenna Rajani
          </a>
        </footer>
      </div>
    </Router>
  );
};

export default AppRouter;
