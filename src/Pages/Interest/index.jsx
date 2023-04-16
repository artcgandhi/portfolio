import React, { Component } from "react";
import MyGap from "../../Components/Atoms/MyGap";
import MyTitle from "../../Components/Atoms/MyTitle";
import { MySection, Paragraph } from "../../Components/GlobalStyles";

class Interest extends Component {
  render() {
    return (
      <MySection id={this.props.id}>
        <MyTitle name="INTEREST" fontSize="36px" fontWeight="500" />
        <MyGap height="5vh" />
        <Paragraph primary maxWidth="80vw">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sunt
          consectetur dolores eaque ex, deleniti, dolor placeat asperiores
          quibusdam pariatur quis eius cumque ipsam suscipit.
        </Paragraph>
        <MyGap height="3vh" />
        <Paragraph primary maxWidth="80vw">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eaque
          quo doloribus explicabo nulla aliquid voluptas nam quam quas dicta
          nesciunt atque sint cupiditate facilis ab reprehenderit voluptatum,
          officia sapiente ex? Dignissimos officia provident laudantium.
        </Paragraph>
      </MySection>
    );
  }
}

export default Interest;
