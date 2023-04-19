import { BookCard, Error, Title } from "components";
import { StyledError } from "pages/DetailsBookPage/styles";
import { CSSProperties } from "react";
import Spinner from "react-spinners/ClipLoader";
import { useAppSelector, getBooksBySearch } from "store";
import { Color } from "ui";
import { StyledSearchPage, SearchBooks, Info, BooksSearchWrapper, Message } from "./styles";

const override: CSSProperties = {
  margin: "200px auto",
};

export const SearchPage = () => {
  const { booksBySearch, isLoading, error, debounceSearchValue, total } = useAppSelector(
    getBooksBySearch,
  );

  return (
    <StyledSearchPage>
      <SearchBooks>
        <Title value={`"${debounceSearchValue}" search results`} />

        {isLoading && (
          <Spinner color={Color.PRIMARY} loading={isLoading} cssOverride={override} size={60} />
        )}

        {error && (
          <StyledError>
            <Error value={error} />
          </StyledError>
        )}

        {!isLoading && !error && (
          <>
            {<Info>Found {total} books</Info>}

            {booksBySearch.length !== 0 ? (
              <BooksSearchWrapper>
                {booksBySearch.map((book, index) => {
                  return <BookCard book={book} key={book.isbn13} index={index} />;
                })}
              </BooksSearchWrapper>
            ) : (
              <Message>No results found</Message>
            )}
          </>
        )}
      </SearchBooks>
    </StyledSearchPage>
  );
};
