import { StyledSecondaryTitle } from "./styles";

interface SecondaryTitleProps {
  value: string;
}

export const SecondaryTitle = ({ value }: SecondaryTitleProps) => {
  return <StyledSecondaryTitle>{value}</StyledSecondaryTitle>;
};
