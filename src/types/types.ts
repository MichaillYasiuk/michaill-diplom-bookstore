interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

interface BookResponse {
  error: string;
  total: string;
  books: Book[];
}

interface BookResponseBySearch {
  total: string;
  page: string;
  books: Book[];
}

interface BookDetails {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf?: BookPDF;
}

interface BookCart {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf?: BookPDF;
  quantity: number;
}
interface BookPDF {
  [format: string]: string;
}

interface SearchValue {
  query: string;
  page: number;
}

export type {Book, SearchValue,BookPDF, BookCart, BookDetails,BookResponseBySearch,BookResponse  }