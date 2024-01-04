import { useEffect, useState } from "react";
import fetchBooks from "../../hooks/books/fetchBooks";

type BookAuthor = { birthDate: Date | null, email: string, firstname: string, lastname: string, id: number };
type Book = { id: number, title: string, author: BookAuthor };

const BooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    retrieveBooks(setBooks);
  }, [])

  return (
    <div>
      {books && books.map((book) => (
        <div>{ book.title }</div>
      ))}
    </div>
  );
};

const retrieveBooks = async (setBooks: React.Dispatch<React.SetStateAction<Book[]>>) => {
  const fetchedBooks: Book[] = await fetchBooks();
  setBooks(fetchedBooks);
}

export default BooksPage;
