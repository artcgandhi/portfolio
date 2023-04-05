import React, { Component } from "react";
import MyGap from "../../Components/Atoms/MyGap";
import MyTitle from "../../Components/Atoms/MyTitle";
import MyEvent from "../../Components/Molecules/MyEvent";
import styles from "./styles.module.css";

class Experience extends Component {
  render() {
    return (
      <>
        <MyTitle name="EXPERIENCE" fontSize="36px" fontWeight="600" />
        <ul className={styles.ul}>
          <li>
            <MyGap height="5vh" />
            <MyEvent
              name="GITHUB CAMPUS EXPERT"
              date="August 2018 - Present"
              text="GITHUB"
            />
          </li>
          <li>
            <MyGap height="5vh" />
            <MyEvent
              name="OPENSOURCE DEVELOPER INTERN"
              date="June 2019 - Present"
              text="FOSSASIA"
            />
          </li>
          <li>
            <MyGap height="5vh" />
            <MyEvent
              name="SOFTWARE DEVELOPER INTERN"
              date="December 2018 - January 2019"
              text="HASURA"
            />
          </li>
        </ul>
      </>
    );
  }
}

export default Experience;
