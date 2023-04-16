import React, { Component } from "react";
import MyLink from "../../Atoms/MyLink";
import styles from "./styles.module.css";

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.ulNav}>
          <li className={styles.list}>
            <MyLink to="/#gandhi" name="Gandhi" />
          </li>
          <li className={styles.list}>
            <MyLink to="/#about" name="About" />
          </li>
          <li className={styles.list}>
            <MyLink to="/#experience" name="Experience" />
          </li>
          <li className={styles.list}>
            <MyLink to="/#skills" name="Skills" />
          </li>
          <li className={styles.list}>
            <MyLink to="/#interest" name="Interest" />
          </li>
          <li className={styles.list}>
            <MyLink to="/#awards" name="Awards" />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
