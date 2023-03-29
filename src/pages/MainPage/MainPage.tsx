import { Title } from "components/atoms/Title/Title";
import { BookCard } from "components/molecules/BookCard/BookCard";
import { Subscription } from "components/molecules/Subscription/Subscription";
import { CSSProperties, useEffect } from "react";
import Spinner from "react-spinners/ClipLoader";
import { fetchBooks } from "store/feautures/newBooksSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { Color } from "ui/colors";
import { StyledMainPage, StyledBooksContainer } from "./styles";

const override: CSSProperties = {
  margin: "200px auto",
};

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector(state => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <StyledMainPage>
      <Title value="NEW RELEASES BOOK" />

      {isLoading && (
        <Spinner color={Color.ORANGE} loading={isLoading} cssOverride={override} size={60} />
      )}
      {error && <p>Error</p>}

      <StyledBooksContainer>
        {books.map((book, index) => {
          return <BookCard book={book} index={index} key={book.isbn13} />;
        })}
        ;
      </StyledBooksContainer>
      <Subscription />
    </StyledMainPage>
  );
};
