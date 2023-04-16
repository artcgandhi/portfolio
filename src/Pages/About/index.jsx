import React, { Component } from "react";
import MyGap from "../../Components/Atoms/MyGap";
import MyTitle from "../../Components/Atoms/MyTitle";
import { MySection, Paragraph } from "../../Components/GlobalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import MyDisbaledTitle from "../../Components/Atoms/MyDisabledTitle";

const iconWrapper = {
  width: "6vw",
  display: "flex",
  justifyContent: "space-between",
  color: "white",
};

class About extends Component {
  render() {
    return (
      <MySection bgPrimary paddingLeft id={this.props.id}>
        <MyTitle name="LOREMIPSUM" fontSize="62px" color="#f0f0d6" />
        <MyDisbaledTitle text="+62 812 0987 6543 | gandhi_wijaya@gmail.com" />
        <MyGap height="5vh" />
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quidem
          unde magnam quia alias tempora similique facere, eum sunt earum dolor
          nam nostrum ea neque velit voluptatibus dolorum beatae aspernatur
          aliquam nihil dicta! Ratione accusantium incidunt nostrum? Doloribus,
          consequuntur amet! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur exercitationem optio accusantium distinctio at
          praesentium, aliquid minus! Error nostrum vel asperiores, aliquam
          laborum suscipit delectus sint quae voluptatem commodi id!
        </Paragraph>
        <MyGap height="10vh" />
        <div style={iconWrapper}>
          <FontAwesomeIcon icon={faGithub} size="2xl" />
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </div>
      </MySection>
    );
  }
}

export default About;
