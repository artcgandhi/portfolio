import React from "react";
import styles from "./styles.module.css";

const MyDate = (props) => {
  return <div className={styles.date}>{props.date}</div>;
};

export default MyDate;
