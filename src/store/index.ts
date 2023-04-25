import { fetchBookByDetails } from "./feautures/bookDetailsSlice";
import {
  addToCart,
  removeFromCart,
  addQuantity,
  deleteQuantity,
  calcTotal,
} from "./feautures/cartSlice";
import { addToFavotires, removeFavorite } from "./feautures/favoritesSlice";
import { fetchBooks } from "./feautures/newBooksSlice";
import {
  fetchBooksBySearch,
  getDebounceSearchValue,
  resetDebounceSearchValue,
} from "./feautures/searchSlice";
import {
  changeTheme,
  fetchSignUpUser,
  fetchSignInUser,
  fetchSignOut,
  fetchResetPassword,
  resetError,
  fetchUpdateEmailAndPassword,
} from "./feautures/userSlice";
import { useToggle } from "./hooks/useToggle";
import { useWindowSize } from "./hooks/useWindowSize";
import { useDebounce } from "./hooks/useDebounce";
import { useInput } from "./hooks/useInput";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { getDetailsBook } from "./selectors/bookDetailsSelectors";
import { getBooks } from "./selectors/bookSelectors";
import { getCartBooks } from "./selectors/cartSelectors";
import { getFavoritesBooks } from "./selectors/favoritesSelectors";
import { getBooksBySearch } from "./selectors/searchSelectors";
import { getUserInfo } from "./selectors/userSelectors";
import { store, persistor } from "./store";
import userReducer from "./feautures/userSlice";
import booksReducer from "./feautures/newBooksSlice";
import bookDetailsReducer from "./feautures/bookDetailsSlice";
import bookFavoritesReducer from "./feautures/favoritesSlice";
import cartReducer from "./feautures/cartSlice";
import searchReducer from "./feautures/searchSlice";

export {
  changeTheme,
  useToggle,
  useWindowSize,
  useAppDispatch,
  useInput,
  useDebounce,
  useAppSelector,
  store,
  userReducer,
  booksReducer,
  fetchBooks,
  getBooks,
  fetchSignUpUser,
  fetchSignInUser,
  getUserInfo,
  bookDetailsReducer,
  fetchBookByDetails,
  getDetailsBook,
  getFavoritesBooks,
  bookFavoritesReducer,
  addToFavotires,
  removeFavorite,
  fetchSignOut,
  cartReducer,
  getCartBooks,
  addToCart,
  removeFromCart,
  addQuantity,
  deleteQuantity,
  calcTotal,
  fetchResetPassword,
  resetError,
  fetchUpdateEmailAndPassword,
  searchReducer,
  fetchBooksBySearch,
  getBooksBySearch,
  getDebounceSearchValue,
  resetDebounceSearchValue,
  persistor,
};
