import React from "react";
import styles from "./styles.module.css";

const Date = (props) => {
  return <p className={styles.date}>{props.date}</p>;
};

export default Date;
