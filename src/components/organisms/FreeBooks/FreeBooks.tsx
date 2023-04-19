import { SecondaryTitle, Slider } from "components";
import { useAppSelector, getBooks } from "store";
import { getFreeBooks } from "utils";
import { StyledFreeBooks } from "./styles";

export const FreeBooks = () => {
  const { books } = useAppSelector(getBooks);
  const freeBooks = getFreeBooks(books);

  return (
    <StyledFreeBooks>
      <SecondaryTitle value="Free books" />
      <Slider booksArray={freeBooks} />
    </StyledFreeBooks>
  );
};
