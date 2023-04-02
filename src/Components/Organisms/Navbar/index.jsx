import React, { Component } from "react";
import LinkTo from "../../Atoms/Link";
import styles from "./styles.module.css";

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.list}>
            <LinkTo name="Home" />
          </li>
          <li className={styles.list}>
            <LinkTo name="About" />
          </li>
          <li className={styles.list}>
            <LinkTo name="Experience" />
          </li>
          <li className={styles.list}>
            <LinkTo name="Skills" />
          </li>
          <li className={styles.list}>
            <LinkTo name="Interest" />
          </li>
          <li className={styles.list}>
            <LinkTo name="Awards" />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
