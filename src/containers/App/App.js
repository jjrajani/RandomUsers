import React, { Component } from "react";
import "./App.scss";
import { Router as AppRouter } from "../";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
