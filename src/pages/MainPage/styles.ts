import styled from "styled-components";

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;
`;

const StyledBooksContainer = styled.ul`
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 50px 0;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 50px;
`;

export { StyledMainPage, StyledBooksContainer };
