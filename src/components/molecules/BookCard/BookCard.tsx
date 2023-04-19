import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { Book } from "types/types";
import {
  StyledBookCard,
  Image,
  BookName,
  BookDescription,
  Description,
  WrapperImage,
  Price,
} from "./styles";
import { Color } from "ui";

interface BookCardProps {
  book: Book;
  index: number;
}

export const BookCard = ({ book, index }: BookCardProps) => {
  const { isbn13, title, subtitle, image, price } = book;

  return (
    <StyledBookCard
      whileTap={{ scale: 1.1 }}
      whileHover={{ boxShadow: `1px 1px 15px ${Color.SECONDARY}` }}
      initial="hidden"
      custom={index}
    >
      <Link to={`${ROUTE.DETAILS}${isbn13}`}>
        <WrapperImage>
          <Image src={image} alt={title} />
        </WrapperImage>

        <Description>
          <BookName>{title}</BookName>
          <BookDescription>{subtitle ? subtitle : "Other"}</BookDescription>
          <Price>{price === "$0.00" ? "for FREE" : price}</Price>
        </Description>
      </Link>
    </StyledBookCard>
  );
};
