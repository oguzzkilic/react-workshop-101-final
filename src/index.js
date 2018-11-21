import React, { Component } from "react";
import ErrorBoundary from './app/components/ErrorBoundary';
import ReactDOM from "react-dom";

import Header from './app/components/Header';
import List from './app/components/List'
import Home from './app/pages/Home';

class App extends Component {
  render() {
    return [
      <ErrorBoundary key="h-1">
        <Header />
      </ErrorBoundary>,
      <Home />
    ]
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();
