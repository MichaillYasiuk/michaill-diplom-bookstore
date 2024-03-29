import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { Label, StyledInput, WrapperInput } from "./styles";

interface InputProps {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  label?: string;
}

export const Input = ({ value, onChange, placeholder, type, label }: InputProps) => {
  return (
    <WrapperInput>
      {label && <Label>{label}</Label>}
      <StyledInput
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        whileHover={{ scale: 1.05 }}
      />
    </WrapperInput>
  );
};
