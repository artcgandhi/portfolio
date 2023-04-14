import React, { Component } from "react";
import MyDisbaledTitle from "../../Components/Atoms/MyDisabledTitle";
import MyGap from "../../Components/Atoms/MyGap";
import MyTitle from "../../Components/Atoms/MyTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

class Skills extends Component {
  state = {
    myList: [
      "HTML5",
      "Javascript",
      "Nodejs",
      "Django",
      "CSS3",
      "React",
      "Pyhton",
      "Ember",
    ],
  };
  render() {
    return (
      <section className={styles.container} id={this.props.id}>
        <div>
          <MyTitle
            name="SKILLS"
            fontSize="36px"
            fontWeight="500"
            color="white"
          />
          <MyGap height="5vh" />
          <MyDisbaledTitle text="PROGRAMMING LANGUAGES & TOOLS" />
          <MyGap height="3vh" />
          <ul className={`${styles.ulWrapper} fa-ul`}>
            {this.state.myList.map((element, index) => (
              <li key={index.toString()}>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  className={styles.iconlist}
                />
                {element}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Skills;
