import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Experience from "../Pages/Experience";
import Skills from "../Pages/Skills";
import Interest from "../Pages/Interest";
import Awards from "../Pages/Awards";

class MyScreen extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Home id="#home" />
        <About id="#about" />
        <Experience id="#experience" />
        <Skills id="#skills" />
        <Interest id="#interest" />
        <Awards id="#awards" />
      </div>
    );
  }
}
export default MyScreen;
