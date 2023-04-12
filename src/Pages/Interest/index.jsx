import React, { Component } from "react";
import MyTitle from "../../Components/Atoms/MyTitle";
import { Paragraph } from "../../Components/Styles/globalStyles";

class Interest extends Component {
  render() {
    return (
      <div>
        <MyTitle name={"Interest"} fontSize="36px" fontWeight="600" />
        <Paragraph primary maxWidth="80vw">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sunt
          consectetur dolores eaque ex, deleniti, dolor placeat asperiores
          quibusdam pariatur quis eius cumque ipsam suscipit.
        </Paragraph>
        <Paragraph primary maxWidth="80vw">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, eaque
          quo doloribus explicabo nulla aliquid voluptas nam quam quas dicta
          nesciunt atque sint cupiditate facilis ab reprehenderit voluptatum,
          officia sapiente ex? Dignissimos officia provident laudantium.
        </Paragraph>
      </div>
    );
  }
}

export default Interest;
