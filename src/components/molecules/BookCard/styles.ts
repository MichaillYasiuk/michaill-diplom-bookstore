import styled from 'styled-components';
import { Color } from 'ui/colors';

import { H3, BODY2 } from 'ui/typography';

const StyledBookCard = styled.li`
  display: grid;
`;

const Image = styled.img`
  width: 100%;
`;

const Description = styled.div`
  display: grid;
`;

const BookName = styled.h3`
  ${H3}
`;

const BookDescription = styled.p`
  color: ${Color.Secondary};
  ${BODY2};
`;

const Price = styled.h3`
  ${H3};
`;

export { StyledBookCard, Image, BookName, BookDescription, Price, Description };
