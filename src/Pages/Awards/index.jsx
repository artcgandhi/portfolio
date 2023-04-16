import React, { Component } from "react";
import MyTitle from "../../Components/Atoms/MyTitle";
import styles from "./styles.module.css";
import MyGap from "../../Components/Atoms/MyGap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { MySection } from "../../Components/GlobalStyles";

class Awards extends Component {
  state = {
    myAwards: [
      "Hack 36 3rd prize winner",
      "Mentor OpenCode'19",
      "Started North Indonesia First Student Design and Developer Conference",
    ],
  };
  render() {
    return (
      <MySection bgPrimary id={this.props.id}>
        <MyTitle
          name="AWARDS & CERTIFIACTION"
          fontSize="36px"
          fontWeight="500"
          color="white"
        />
        <MyGap height="5vh" />
        <ul className={`${styles.ulWrapper} fa-ul`}>
          {this.state.myAwards.map((element, index) => (
            <li key={index.toString()}>
              <FontAwesomeIcon icon={faAward} className={styles.iconList} />
              {element}
            </li>
          ))}
        </ul>
      </MySection>
    );
  }
}

export default Awards;
