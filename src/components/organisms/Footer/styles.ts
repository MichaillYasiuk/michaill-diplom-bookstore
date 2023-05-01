import styled from "styled-components";
import { Color } from "ui/colors";
import { Media } from "ui/media";

const WrapperFooter = styled.div`
  background: ${Color.LIGHT};
  position: sticky;
  bottom: 0;

  ${Media.LG} {
    position: static;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;
  position: sticky;
  bottom: 0;

  ${Media.MD} {
    padding-block: 25px;
    flex-direction: column;
  }
`;

const FooterDescription = styled.p`
  line-height: 24px;
  color: ${Color.SECONDARY};

  ${Media.MD} {
    line-height: 36px;
  }
`;

export { StyledFooter, FooterDescription, WrapperFooter };
