import { useEffect, useState, Dispatch } from "react";
import fetchBooks from "../../hooks/books/fetchBooks";

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
