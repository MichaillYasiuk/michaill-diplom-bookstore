import { SecondaryTitle, Slider } from "components";
import { Book } from "types/types";
import { StyledSimilarBooks } from "./styles";

interface SimilarProps {
  booksSimilar: Book[];
}

export const SimilarBooks = ({ booksSimilar }: SimilarProps) => {
  return (
    <StyledSimilarBooks>
      <SecondaryTitle value="Similar books" />
      <Slider booksArray={booksSimilar} />
    </StyledSimilarBooks>
  );
};
