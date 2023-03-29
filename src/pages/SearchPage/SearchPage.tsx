import { BookCard } from "components/molecules/BookCard/BookCard";
import { StyledBooksContainer } from "pages/MainPage/styles";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Spinner from "react-spinners/ClipLoader";
import { fetchBooksBySearch } from "store/feautures/searchSlice";
import { useAppSelector, useAppDispatch } from "store/hooks/hooks";
import { Color } from "ui/colors";
import { Input } from "./styles";

export const SearchPage = () => {
  const { isLoading, booksBySearch, error } = useAppSelector(state => state.search);

  const { register } = useForm();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooksBySearch({ searchValue: "it" }));
  }, [dispatch]);
  return (
    <div>
      <form>
        <Input type="text" {...register("searchValue")} />
      </form>

      {isLoading && <Spinner color={Color.ORANGE} loading={isLoading} size={60} />}
      {error && <span>{error}</span>}
      {booksBySearch && booksBySearch.length > 0 && (
        <StyledBooksContainer>
          {booksBySearch.map((book, index) => {
            return <BookCard book={book} index={index} key={book.isbn13} />;
          })}
          ;
        </StyledBooksContainer>
      )}
    </div>
  );
};
