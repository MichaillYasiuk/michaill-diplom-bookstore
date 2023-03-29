import styled from "styled-components";
import { Color } from "ui/colors";
import { Media } from "ui/media";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  border-top: 1px solid ${Color.ORANGE};
  background: ${Color.LIGHT};
  position: sticky;
  bottom: 0;

  ${Media.LG} {
    position: sticky;
  }

  ${Media.MD} {
    flex-direction: column;
    position: sticky;
  }
`;

const FooterDescription = styled.p`
  line-height: 24px;
  color: ${Color.SECONDARY};

  ${Media.MD} {
    line-height: 36px;
  }
`;

export { StyledFooter, FooterDescription };
