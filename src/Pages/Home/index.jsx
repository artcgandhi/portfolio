import React, { Component } from "react";
import MyTitle from "../../Components/Atoms/MyTitle";
import styles from "./styles.module.css";

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img />
        <MyTitle name="Saka" fontSize="63px" color="#353532" />
        <p>Architecture | Design Graphic | Photography</p>
      </div>
    );
  }
}

export default Home;
