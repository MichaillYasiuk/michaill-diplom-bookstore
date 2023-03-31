import { UserIcon, BurgerIcon, MoonIcon, FavoritesIcon, CartIcon } from "assets";
import { HeaderCustomLink } from "components/molecules/HeaderCustomLink/HeaderCustomLink";
import { SearchHeader } from "components/molecules/SearchHeader/SearchHeader";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { useWindowSize } from "store/hooks/useWindowSize";
import { Breakpoint, Color } from "ui";
import {
  WrapperHeader,
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
} from "./styles";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <WrapperHeader>
      <StyledHeader>
        <Link to={ROUTE.MAIN}>
          <ButtonLogo whileHover={{ scale: 1.05 }}>
            <Logo>BOOKSTORE</Logo>
          </ButtonLogo>
        </Link>

        {width > Breakpoint.LG && <SearchHeader />}

        <ButtonTheme onClick={toggleTheme} whileHover={{ scale: 1.1 }}>
          <MoonIcon />
        </ButtonTheme>

        <List>
          <Item>
            <HeaderCustomLink to={ROUTE.FAVORITES}>
              <FavoritesButton whileHover={{ scale: 1.1 }}>
                <FavoritesIcon width="26" stroke={Color.PRIMARY} />
              </FavoritesButton>
            </HeaderCustomLink>
          </Item>

          <Item>
            <HeaderCustomLink to={ROUTE.CART}>
              <CartButton whileHover={{ scale: 1.1 }}>
                <CartIcon width="26" stroke={Color.PRIMARY} />
              </CartButton>
            </HeaderCustomLink>
          </Item>

          <Item>
            <HeaderCustomLink to={ROUTE.ACCOUNT}>
              <UserButton whileHover={{ scale: 1.1 }}>
                <UserIcon width="26" stroke={Color.PRIMARY} />
              </UserButton>
            </HeaderCustomLink>
          </Item>
        </List>

        <ButtonBurger whileHover={{ scale: 1.1 }}>
          <BurgerIcon width="26" height="26" fill={Color.PRIMARY} />
        </ButtonBurger>
      </StyledHeader>
    </WrapperHeader>
  );
};
