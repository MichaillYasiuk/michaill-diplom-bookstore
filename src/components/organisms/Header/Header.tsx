import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { useWindowSize } from "store/hooks/useWindowSize";
import { Breakpoint, Color, Container } from "ui";
import {
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
  StyledHeader,
} from "./styles";
import { AnimatePresence } from "framer-motion";
import { useToggle } from "store/hooks/useToggle";
import { BurgerMenu, HeaderCustomLink, SearchHeader } from "components";
import { BurgerIcon, CartIcon, FavoritesIcon, MoonIcon, SunIcon, UserIcon } from "assets";
import { changeTheme } from "store/feautures/userSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getUserInfo);
  const [isDark, toggleIsInstallDark] = useToggle();
  const [isOpen, toggleIsOpen] = useToggle();
  const setAttributeTheme = (themeValue: "light" | "dark") => {
    document.documentElement.setAttribute("theme", `${themeValue}`);
  };

  setAttributeTheme(theme);

  const handleTheme = () => {
    if (theme === "dark") {
      dispatch(changeTheme("light"));
    } else {
      dispatch(changeTheme("dark"));
    }

    setAttributeTheme(theme);
    toggleIsInstallDark();
  };
  const handleBurger = (): void => {
    toggleIsOpen();
  };
  return (
    <WrapperHeader>
      <Container>
        <StyledHeader>
          <Link to={ROUTE.MAIN}>
            <ButtonLogo whileHover={{ scale: 1.05 }}>
              <Logo>BOOKSTORE</Logo>
            </ButtonLogo>
          </Link>

          {width > Breakpoint.LG && <SearchHeader />}

          <ButtonTheme onClick={handleTheme} whileHover={{ scale: 1.1 }}>
            {isDark ? (
              <MoonIcon width="24" fill={Color.PRIMARY} />
            ) : (
              <SunIcon width="24" fill={Color.PRIMARY} />
            )}
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
            <BurgerIcon width="28" height="28" fill={Color.PRIMARY} onClick={handleBurger} />
          </ButtonBurger>
          <AnimatePresence>{isOpen && <BurgerMenu handleBurger={handleBurger} />} </AnimatePresence>
        </StyledHeader>
      </Container>
    </WrapperHeader>
  );
};
