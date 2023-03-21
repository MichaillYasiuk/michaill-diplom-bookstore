import React, { ReactNode } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { ROUTE } from '../../../routes/routes';
import { StyledCustomLink } from './styles';

interface CustomLinkProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomLink = ({ children, to }: CustomLinkProps) => {
  const match = useMatch(to);
  return (
    <StyledCustomLink>
      <NavLink to={to} className={`${match && 'fw-bold'}`}>
        {children}
      </NavLink>
    </StyledCustomLink>
  );
};
