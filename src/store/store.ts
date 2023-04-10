import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./feautures/newBooksSlice";
import searchReducer from "./feautures/searchSlice";
import userReducer from "./feautures/userSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    search: searchReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
