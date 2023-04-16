import React, { Component } from "react";
import MyTitle from "../../Components/Atoms/MyTitle";
import { MySection, Paragraph } from "../../Components/GlobalStyles";
import MyGap from "../../Components/Atoms/MyGap";

class Jumbotron extends Component {
  render() {
    return (
      <MySection textCenter justifyStart id={this.props.id}>
        <MyGap height="10vh" />
        <MyTitle name="Gandhi Wijaya" fontSize="63px" color="#353532" />
        <MyGap height="3vh" />
        <Paragraph primary>Photography | Design Graphic | Front End</Paragraph>
      </MySection>
    );
  }
}

export default Jumbotron;
