import { Link } from 'react-router-dom';
import { Book } from 'types/types';
import { ROUTE } from '../../../routes/routes';
import {
  StyledBookCard,
  Image,
  BookName,
  BookDescription,
  Description,
} from './styles';

interface BookCardProps {
  book: Book;
  index: number;
}

export const BookCard = ({ book }: BookCardProps) => {
  const { isbn13, title, subtitle, image, price } = book;

  return (
    <StyledBookCard>
      <Link to={`${ROUTE.DETAILS_BOOK}${isbn13}`}>
        <Image src={image} alt={title} />

        <Description>
          <BookName>{title}</BookName>
          <BookDescription>{subtitle ? subtitle : 'Another'}</BookDescription>
          <p>{price === '$0.00' ? 'for FREE' : price}</p>
        </Description>
      </Link>
    </StyledBookCard>
  );
};
