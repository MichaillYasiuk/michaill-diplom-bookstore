import styled from "styled-components";
import { H1, Media } from "ui";

const StyledNotFoundPage = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  margin-block: 72px;

  ${Media.MD} {
    margin-block: 56px;
  }
`;

const Title = styled.h3`
  text-align: center;
  ${H1}
`;

export { StyledNotFoundPage, Title };
