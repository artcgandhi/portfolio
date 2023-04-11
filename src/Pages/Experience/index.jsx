import React, { Component } from "react";
import MyGap from "../../Components/Atoms/MyGap";
import MyTitle from "../../Components/Atoms/MyTitle";
import MyEvent from "../../Components/Molecules/MyEvent";
import styles from "./styles.module.css";
import { Paragraph } from "../../Components/Styles/globalStyles.js";

class Experience extends Component {
  render() {
    return (
      <section>
        <div>
          <MyTitle name="EXPERIENCE" fontSize="36px" fontWeight="600" />

          <ul className={styles.ul}>
            <li>
              <MyGap height="5vh" />
              <MyEvent
                name="GITHUB CAMPUS EXPERT"
                date="August 2018 - Present"
                text="GITHUB"
              />
              <Paragraph primary maxWidth="70vw">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, similique laudantium provident accusamus rerum voluptas!
              </Paragraph>
            </li>
            <li>
              <MyGap height="5vh" />
              <MyEvent
                name="OPENSOURCE DEVELOPER INTERN"
                date="June 2019 - Present"
                text="FOSSASIA"
              />
              <Paragraph primary maxWidth="70vw">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                animi adipisci ea minus numquam nobis rerum! Iusto qui
                necessitatibus obcaecati molestias atque omnis dolore quam.
              </Paragraph>
            </li>
            <li>
              <MyGap height="5vh" />
              <MyEvent
                name="SOFTWARE DEVELOPER INTERN"
                date="December 2018 - January 2019"
                text="HASURA"
              />
              <Paragraph primary maxWidth="70vw">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, sequi.
              </Paragraph>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Experience;
