import { StyledTitle } from "./styles";

interface TitleProps {
  value: string;
}

export const Title = ({ value }: TitleProps) => {
  return <StyledTitle>{value}</StyledTitle>;
};
