import { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";
import { ROUTE } from "routes";
import { StyledCustomLink } from "./styles";

interface RegistrationProps {
  children: ReactNode;
  to: ROUTE;
}

export const RegistrationLink = ({ to, children }: RegistrationProps) => {
  const isActive = useMatch(to);

  return (
    <StyledCustomLink $active={isActive}>
      <Link to={to}>{children}</Link>
    </StyledCustomLink>
  );
};
