import { CloseIcon } from "assets";
import { Color } from "ui";
import { StyledClose } from "./styles";

interface CloseProps {
  onClick?: () => void;
}

export const Close = ({ onClick }: CloseProps) => {
  return (
    <StyledClose onClick={onClick}>
      <CloseIcon width="24" fill={Color.PRIMARY} />
    </StyledClose>
  );
};
