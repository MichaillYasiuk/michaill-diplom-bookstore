import React, { CSSProperties, useEffect } from 'react';
import { BookCard } from '../../components/molecules/BookCard/BookCard';
import Spinner from 'react-spinners/ClipLoader';
import { Title } from '../../components/atoms/Title/Title';
import { fetchBooks } from '../../store/feautures/newBooksSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { StyledBooksContainer, StyledMainPage } from './styles';
import { Color } from 'ui/colors';

const override: CSSProperties = {
  margin: '200px auto',
};

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <StyledMainPage>
      <Title value="New releases book" />

      {isLoading && (
        <Spinner
          color={Color.Orange}
          loading={isLoading}
          cssOverride={override}
          size={60}
        />
      )}
      {error && <p>Error</p>}

      <StyledBooksContainer>
        {books.map((book, index) => {
          return <BookCard book={book} index={index} key={book.isbn13} />;
        })}
        ;
      </StyledBooksContainer>
    </StyledMainPage>
  );
};
