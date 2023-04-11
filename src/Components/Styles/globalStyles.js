import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => (props.primary ? "grey" : "white")};
  max-width: ${(props) => props.maxWidth};
`;
