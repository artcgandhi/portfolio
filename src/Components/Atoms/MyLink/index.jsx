import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const MyLink = (props) => {
  return (
    <Link to={props.to} className={styles.link}>
      {props.name}
    </Link>
  );
};

export default MyLink;
