import { configureStore } from '@reduxjs/toolkit';
import newBookReducer from './feautures/newBooksSlice';

import searchReducer from './feautures/searchSlice';

export const store = configureStore({
  reducer: {
    books: newBookReducer,
    search: searchReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
