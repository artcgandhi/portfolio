import React, { Component } from "react";
import MyTitle from "../../Components/Atoms/MyTitle";
import { MySection, Paragraph } from "../../Components/GlobalStyles";
import MyGap from "../../Components/Atoms/MyGap";
import Person from "../../Assets/Img/person.jpg";
const imgStyles = {
  width: "200px",
  borderRadius: "50%",
  verticalAlign: "middle",
  boxSizing: "border-box",
  margin: 0,
};

class Jumbotron extends Component {
  render() {
    return (
      <MySection itemsCenter justifyStart id={this.props.id}>
        <MyGap height="10vh" />
        <img src={Person} style={imgStyles} />
        <MyTitle name="Gandhi Wijaya" fontSize="63px" color="#353532" />
        <MyGap height="3vh" />
        <Paragraph primary>Photography | Design Graphic | Front End</Paragraph>
      </MySection>
    );
  }
}

export default Jumbotron;
