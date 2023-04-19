import { Title, BookCard, Subscription, Error } from "components";
import { CSSProperties, useEffect } from "react";
import Spinner from "react-spinners/ClipLoader";
import { useAppDispatch, useAppSelector, getBooks, fetchBooks } from "store";
import { Color } from "ui";
import { StyledMainPage, StyledError, StyledBooksContainer } from "./styles";

const override: CSSProperties = {
  margin: "200px auto",
};

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector(getBooks);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <StyledMainPage>
      <Title value="NEW REALESES" />

      {isLoading && (
        <Spinner color={Color.PRIMARY} loading={isLoading} cssOverride={override} size={60} />
      )}
      {error && (
        <StyledError>
          <Error value={error} />
        </StyledError>
      )}

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
