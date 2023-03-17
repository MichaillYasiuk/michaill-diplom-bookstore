import React, { useEffect } from 'react';

import { Title } from '../../components/Title/Title';
import { fetchBooks } from '../../store/feautures/newBooksSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <Title value="New releases book" />

      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && <p>Error</p>}

      <div>
        <ul>
          {books.map((book) => {
            return (
              <li>
                {book.title} {book.price}
                {book.subtitle}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
