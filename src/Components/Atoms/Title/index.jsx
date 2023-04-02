import React from "react";

const Title = (props) => {
  const { fontSize, fontWeight, color } = props;
  const myStyle = {
    fontSize: fontSize || "16px",
    fontWeight: fontWeight || "normal",
    color: color || "#000000",
  };
  return <div style={myStyle}>{props.name}</div>;
};

export default Title;
