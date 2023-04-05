import React, { Component } from "react";
import MyDate from "../../Atoms/MyDate";
import MyDisbaledTitle from "../../Atoms/MyDisabledTitle";
import MyTitle from "../../Atoms/MyTitle";
import styles from "./styles.module.css";

class MyEvent extends Component {
  render() {
    return (
      <>
        <div className={styles.spacingWrapper}>
          <MyTitle name={this.props.name} fontSize="1.5rem" fontWeight="500" />
          <MyDate date={this.props.date} />
        </div>
        <MyDisbaledTitle text={this.props.text} />
      </>
    );
  }
}

export default MyEvent;
