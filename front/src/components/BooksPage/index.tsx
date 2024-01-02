import { useEffect, useState } from "react";
import fetchBooks from "../../hooks/books/fetchBooks";

type BookAuthor = { birthDate: Date | null, email: String, firstname: String, lastname: String, id: Number };
type Book = { id: Number, title: String, author: BookAuthor };

const BooksPage = () => {
  const [books, setBooks] = useState<[Book] | []>([]);

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

const retrieveBooks = async (setBooks: any) => {
  const fetchedBooks = await fetchBooks();
  setBooks(fetchedBooks);
}

export default BooksPage;
