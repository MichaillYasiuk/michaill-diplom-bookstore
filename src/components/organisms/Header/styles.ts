import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media } from "ui";

const WrapperHeader = styled.div`
  z-index: 2;
  background: ${Color.LIGHT};
  position: sticky;
  top: 0;
`;

const StyledHeader = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 20% 55% 5% 20%;
  align-items: center;
  padding-block: 20px;

  ${Media.LG} {
    grid-template-columns: none;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

const ButtonLogo = styled(motion.button)`
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ButtonTheme = styled.button`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  ${Media.LG} {
    margin-left: auto;
  }
`;
const Logo = styled.p`
  font-size: 36px;
  font-weight: 500;
  color: ${Color.PRIMARY};
`;

const List = styled.ul`
  justify-self: end;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;

  ${Media.LG} {
    grid-template-columns: none;
    margin-inline: 10px;
  }
`;

const Item = styled.li`
  align-self: center;
`;

const FavoritesButton = styled.button`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  ${Media.LG} {
    display: none;
  }
`;

const CartButton = styled.button`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  ${Media.LG} {
    display: none;
  }
`;

const UserButton = styled.button`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
  }
  ${Media.LG} {
    display: none;
  }
`;

const ButtonBurger = styled(motion.button)`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  :hover {
    box-shadow: 1px 1px 15px ${Color.GRAY};
    transform: scale(1.2);
  }

  ${Media.LG} {
    display: flex;
  }
`;

export {
  StyledHeader,
  ButtonLogo,
  ButtonTheme,
  List,
  Item,
  FavoritesButton,
  CartButton,
  UserButton,
  ButtonBurger,
  Logo,
  WrapperHeader,
};
