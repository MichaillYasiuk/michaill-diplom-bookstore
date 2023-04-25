import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import {
  changeTheme,
  getCartBooks,
  getFavoritesBooks,
  getUserInfo,
  useAppDispatch,
  useAppSelector,
  useToggle,
  useWindowSize,
} from "store";
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
import { BurgerMenu, HeaderCustomLink, SearchHeader } from "components";
import {
  BurgerIcon,
  CartActiveIcon,
  CartIcon,
  FavoritesActiveIcon,
  FavoritesIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
} from "assets";

export const Header = () => {
  const { width = 0 } = useWindowSize();
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getUserInfo);
  const [isDark, toggleIsInstallDark] = useToggle();
  const [isOpen, toggleIsOpen] = useToggle();
  const { cartBooks } = useAppSelector(getCartBooks);
  const { favoritesBooks } = useAppSelector(getFavoritesBooks);
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
            <Item key="1">
              <HeaderCustomLink to={ROUTE.FAVORITES}>
                <FavoritesButton whileHover={{ scale: 1.1 }}>
                  {favoritesBooks.length > 0 ? (
                    <FavoritesActiveIcon width="24" stroke={Color.PRIMARY} />
                  ) : (
                    <FavoritesIcon width="24" stroke={Color.PRIMARY} />
                  )}
                </FavoritesButton>
              </HeaderCustomLink>
            </Item>

            <Item key="2">
              <HeaderCustomLink to={ROUTE.CART}>
                <CartButton whileHover={{ scale: 1.1 }}>
                  {cartBooks.length > 0 ? (
                    <CartActiveIcon width="24" stroke={Color.PRIMARY} />
                  ) : (
                    <CartIcon width="24" stroke={Color.PRIMARY} />
                  )}
                </CartButton>
              </HeaderCustomLink>
            </Item>

            <Item key="3">
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
