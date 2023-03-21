import { StyledError } from './styles';

interface ErrorProps {
  value: string;
}

export const Error = ({ value }: ErrorProps) => {
  return <StyledError> ❌{value}</StyledError>;
};
