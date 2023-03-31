import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media } from "ui";

const WrapperHeader = styled.div``;

const StyledHeader = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 20% 55% 5% 20%;
  align-items: center;
  padding-block: 20px;
  border-bottom: 1px solid ${Color.SECONDARY};

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

const ButtonTheme = styled(motion.button)`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;

  ${Media.LG} {
    margin-left: auto;
  }
`;
const Logo = styled.p`
  font-size: 36px;
  font-weight: 500;
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

const FavoritesButton = styled(motion.button)`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;

  ${Media.LG} {
    display: none;
  }
`;

const CartButton = styled(motion.button)`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;
`;

const UserButton = styled(motion.button)`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;

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
  WrapperHeader,
  Logo,
};