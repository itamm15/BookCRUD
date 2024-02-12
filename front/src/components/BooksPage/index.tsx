import { useEffect, useState, Dispatch } from "react";
import fetchBooks from "../../hooks/books/fetchBooks";

type BookAuthor = { birthDate: Date | null, email: string, firstname: string, lastname: string, id: number };
type Book = { id: number, title: string, author: BookAuthor };

const BooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    retrieveBooks(setBooks);
  }, [])

  return (
    <>
      {books && books.map((book) => (
        <div>{ book.title }</div>
      ))}
    </>
  );
};

const retrieveBooks = async (setBooks: Dispatch<Book[]>) => {
  try {
    const fetchedBooks: Book[] = await fetchBooks();
    setBooks(fetchedBooks);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

export default BooksPage;
