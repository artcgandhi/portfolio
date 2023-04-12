import React, { Component } from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
// import "./App.css";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Interest from "./Pages/Interest";
import Awards from "./Pages/Awards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Interest />
        <Awards />
      </div>
    );
  }
}

export default App;
