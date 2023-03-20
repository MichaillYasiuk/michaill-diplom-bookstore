import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Registration } from '../components/Registration/Registration';
import { RequareAuth } from '../components/RequareAuth/RequareAuth';
import {
  MainPage,
  DetailsPage,
  CartPage,
  SearchPage,
  AccountPage,
  SignInPage,
  SignUpPage,
  FavoritesPage,
  ResetPasswordPage,
  NotFoundPage,
} from '../pages';
import { MainTemplate } from '../templates/MainTemplate';
import { ROUTE } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.MAIN} element={<MainTemplate />}>
      <Route index element={<MainPage />} />

      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.DETAILS} element={<DetailsPage />} />

      <Route element={<Registration />}>
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      </Route>

      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />

      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.CART} element={<CartPage />} />
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
      </Route>
    </Route>
  )
);