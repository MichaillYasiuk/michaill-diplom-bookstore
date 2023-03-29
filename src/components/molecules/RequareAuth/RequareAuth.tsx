import { Outlet, Navigate } from "react-router-dom";
import { ROUTE } from "routes";

export const RequareAuth = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
