import { Outlet, Navigate } from "react-router-dom";
import { ROUTE } from "routes";
import { useAppSelector, getUserInfo } from "store";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return isAuth ? <Outlet /> : <Navigate to={`/${ROUTE.SIGN_IN}`} />;
};
