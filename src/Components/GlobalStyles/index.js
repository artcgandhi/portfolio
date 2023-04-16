import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Paragraph = styled.p`
  color: ${(props) => (props.primary ? "grey" : "white")};
  max-width: ${(props) => props.maxWidth};
  margin: 0;
`;

export const MySection = styled.section`
  min-height: 90vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justifyStart ? "start" : "center")};
  align-items: ${(props) => (props.itemsCenter ? "center" : "normal")};
  background-color: ${(props) => (props.bgPrimary ? "#353532" : "white")};
`;
