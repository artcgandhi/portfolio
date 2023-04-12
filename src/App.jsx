import React, { Component } from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
// import "./App.css";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Interest from "./Pages/Interest";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Interest />
      </div>
    );
  }
}

export default App;
