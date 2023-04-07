import styled from "styled-components";
import { Media } from "ui";

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;
`;
const StyledError = styled.div`
  align-self: center;
  margin-top: 20%;
`;
const StyledBooksContainer = styled.ul`
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 50px 0;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 50px;
  ${Media.MD} {
    margin-top: 25px;
  }
`;

export { StyledMainPage, StyledBooksContainer, StyledError };
