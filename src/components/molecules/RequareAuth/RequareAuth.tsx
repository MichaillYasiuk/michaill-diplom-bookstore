import { Outlet, Navigate } from "react-router-dom";
import { ROUTE } from "routes";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";

// export const RequareAuth = () => {
//   const isAuth = true;
//   return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
// };
export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUserInfo);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
