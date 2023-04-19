import { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";
import { ROUTE } from "routes";
import { StyledCustomLink } from "./styles";

interface HeaderCustomProps {
  children: ReactNode;
  to: ROUTE;
}

export const HeaderCustomLink = ({ to, children }: HeaderCustomProps) => {
  const isActive = useMatch(to);

  return (
    <StyledCustomLink $active={isActive}>
      <Link to={to}>{children}</Link>
    </StyledCustomLink>
  );
};
