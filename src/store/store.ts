import { configureStore } from '@reduxjs/toolkit';
import newBookReducer from './feautures/newBooksSlice';

export const store = configureStore({
  reducer: {
    books: newBookReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
