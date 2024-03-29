import { MainTemplate, Registration, RequareAuth } from "components";
import {
  MainPage,
  SearchPage,
  DetailsBookPage,
  SignInPage,
  SignUpPage,
  ResetPasswordPage,
  NotFoundPage,
  FavoritesPage,
  CartPage,
  AccountPage,
} from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.MAIN} element={<MainTemplate />}>
      <Route index element={<MainPage />} />
      <Route path={`${ROUTE.SEARCH}:page`} element={<SearchPage />} />
      <Route path={`${ROUTE.DETAILS}:id`} element={<DetailsBookPage />} />

      <Route element={<Registration />}>
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      </Route>

      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={ROUTE.MAIN} element={<NotFoundPage />} />

      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.CART} element={<CartPage />} />
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
      </Route>
    </Route>,
  ),
);
