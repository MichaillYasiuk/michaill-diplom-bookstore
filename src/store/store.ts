import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  userReducer,
  booksReducer,
  cartReducer,
  searchReducer,
  bookDetailsReducer,
  bookFavoritesReducer,
} from "store";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart", "booksFavorites"],
};

const rootReducer = combineReducers({
  user: userReducer,
  books: booksReducer,
  search: searchReducer,
  bookDetails: bookDetailsReducer,
  booksFavorites: bookFavoritesReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
