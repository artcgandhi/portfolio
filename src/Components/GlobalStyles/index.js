import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => (props.primary ? "grey" : "white")};
  max-width: ${(props) => props.maxWidth};
  margin: 0;
`;

export const MySection = styled.section`
  min-height: 90vh;
  background-color: ${(props) => (props.bgPrimary ? "#353532" : "white")};
  text-align: ${(props) => (props.textCenter ? "center" : "left")};
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justifyStart ? "start" : "center")};
`;
