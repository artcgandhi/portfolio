import React, { Component } from "react";
// import "./App.css";
import Navbar from "./Components/Organisms/Navbar";
import ScrollHandler from "./Features/ScrollHandler";
import MyScreen from "./MyScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollHandler />
        <Navbar />
        <MyScreen />
      </div>
    );
  }
}

export default App;
