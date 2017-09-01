import React, { Component } from "react";
import { Link } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="main-app">
        <header className="main-header">
          <h1>
            <Link to="/">React Git Searchin'</Link>
          </h1>
        </header>
        <main className="main-content">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
