import React, { Component } from "react";
import MyGap from "../../Components/Atoms/MyGap";
import MyTitle from "../../Components/Atoms/MyTitle";
import styles from "./styles.module.css";

class About extends Component {
  render() {
    return (
      <div className={styles.container}>
        <MyTitle name="LOREMIPSUM" fontSize="62px" color="#f0f0d6" />
        <p>
          +62 896 3770 8915 | <span>gandhiiii9@gmail.com</span>
        </p>
        <MyGap height="0.5vh" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem
          unde magnam quia alias tempora similique facere, eum sunt earum dolor
          nam nostrum ea neque velit voluptatibus dolorum beatae aspernatur
          aliquam nihil dicta! Ratione accusantium incidunt nostrum? Doloribus,
          consequuntur amet! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur exercitationem optio accusantium distinctio at
          praesentium, aliquid minus! Error nostrum vel asperiores, aliquam
          laborum suscipit delectus sint quae voluptatem commodi id!
        </p>
      </div>
    );
  }
}

export default About;
