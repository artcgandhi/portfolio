import React, { Component } from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
// import "./App.css";
import Experience from "./Pages/Experience";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Experience />
      </div>
    );
  }
}

export default App;
