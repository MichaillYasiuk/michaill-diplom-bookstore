import { HTMLInputTypeAttribute } from 'react';
import { StyledInput } from './styles';

interface InputProps {
  value: string | number;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

export const Input = ({ value, placeholder, type }: InputProps) => {
  return <StyledInput value={value} type={type} placeholder={placeholder} />;
};
