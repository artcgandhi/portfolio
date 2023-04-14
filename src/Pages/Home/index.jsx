import React, { Component } from "react";
import MyTitle from "../../Components/Atoms/MyTitle";
import styles from "./styles.module.css";

class Home extends Component {
  render() {
    return (
      <div className={styles.container} id={this.props.id}>
        <img />
        <MyTitle name="Gandhi Wijaya" fontSize="63px" color="#353532" />
        <p>Photography | Design Graphic | Front End</p>
      </div>
    );
  }
}

export default Home;
