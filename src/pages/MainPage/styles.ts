import styled from "styled-components";

const StyledMainPage = styled.div`
  display: grid;
`;

const StyledBooksContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 50px;
  justify-content: center;
  align-content: center;
`;

export { StyledMainPage, StyledBooksContainer };
