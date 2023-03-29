import styled from "styled-components";
import { Color, Media, BODY2, H3 } from "ui";

const StyledBookCard = styled.li`
  display: grid;
  box-shadow: 1px 1px 15px ${Color.GRAY};
`;

const Image = styled.img`
  width: 100%;
`;
const WrapperImage = styled.div`
  height: auto;
  padding: 2px 60px;
  background: ${Color.BLUE};
  ${Media.LG} {
    padding: 0 60px;
  }
  ${Media.MD} {
    padding: 0 50px;
  }
`;
const Description = styled.div`
  color: ${Color.SECONDARY};
  ${BODY2};
`;

const BookName = styled.h3`
  ${H3}
`;

const BookDescription = styled.p`
  color: ${Color.SECONDARY};
  ${BODY2};
`;

const Price = styled.h3`
  ${H3};
`;

export { StyledBookCard, Image, BookName, BookDescription, Price, Description, WrapperImage };
