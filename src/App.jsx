import React, { Component } from "react";
// import "./App.css";
import Navbar from "./Components/Organisms/Navbar";
import ScrollHandler from "./Features/ScrollHandler";
import Pages from "./Pages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollHandler />
        <Navbar />
        <Pages />
      </div>
    );
  }
}

export default App;
