import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Interest from "./Interest";
import Awards from "./Awards";

class MyScreen extends Component {
  render() {
    return (
      <>
        <Jumbotron id="#gandhi" />
        <About id="#about" />
        <Experience id="#experience" />
        <Skills id="#skills" />
        <Interest id="#interest" />
        <Awards id="#awards" />
      </>
    );
  }
}
export default MyScreen;
