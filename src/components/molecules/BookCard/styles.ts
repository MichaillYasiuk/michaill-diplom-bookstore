import { motion } from "framer-motion";
import styled from "styled-components";
import { Media, BODY2, H3, Color } from "ui";

const StyledBookCard = styled(motion.li)`
  display: grid;
  box-shadow: 1px 1px 15px ${Color.GRAY};
  border-radius: 15px;
`;

const WrapperImage = styled.div`
  height: auto;
  padding: 1px 45px;
  background: ${Color.BLUE};
  border-radius: 15px;
  ${Media.LG} {
    padding: 0 60px;
  }
  ${Media.MD} {
    padding: 0 50px;
  }
`;
const Image = styled.img`
  width: 100%;
`;
const Description = styled.div`
  display: grid;
  gap: 10px;
  padding: 20px 10px 5px 10px;
  color: ${Color.SECONDARY};
  ${BODY2};
`;

const BookName = styled.h3`
  ${H3};
  color: ${Color.PRIMARY};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const BookDescription = styled.p`
  color: ${Color.SECONDARY};
  ${BODY2};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.h3`
  ${H3};
  color: ${Color.PRIMARY};
`;

export { StyledBookCard, Image, BookName, BookDescription, Price, Description, WrapperImage };
