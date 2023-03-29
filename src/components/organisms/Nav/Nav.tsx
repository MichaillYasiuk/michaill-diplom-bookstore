import { CustomLink } from "components/molecules/CustomLink/CustomLink";
import { useState, useEffect } from "react";
import { ROUTE } from "routes";

export const Nav = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <nav className="bg-light p-3   d-flex gap-5">
      <CustomLink to={ROUTE.MAIN}>Main</CustomLink>
      <CustomLink to={ROUTE.SEARCH}>Search</CustomLink>
      <CustomLink to={ROUTE.DETAILS}>Details</CustomLink>
      <CustomLink to={ROUTE.SIGN_IN}>Sign-in</CustomLink>
      <CustomLink to={ROUTE.SIGN_UP}>Sign-up</CustomLink>
      <CustomLink to={ROUTE.RESET_PASSWORD}>Reset password</CustomLink>
      <CustomLink to={ROUTE.NOT_FOUND}>Not found</CustomLink>
      <CustomLink to={ROUTE.FAVORITES}>Favorites</CustomLink>
      <CustomLink to={ROUTE.CART}>Cart</CustomLink>
      <CustomLink to={ROUTE.ACCOUNT}>Account</CustomLink>
      <button onClick={toggleTheme}>ToggleTheme</button>
    </nav>
  );
};
