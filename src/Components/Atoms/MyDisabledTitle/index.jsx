import React from "react";

const MyDisbaledTitle = (props) => {
  const myStyle = {
    fontSize: "18px",
    fontWeight: "500",
    color: "grey",
  };
  return <div style={myStyle}>{props.text}</div>;
};

export default MyDisbaledTitle;
