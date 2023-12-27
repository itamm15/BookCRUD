package com.osinskimat.SimpleCRUD.controller;

import com.osinskimat.SimpleCRUD.model.Book;
import com.osinskimat.SimpleCRUD.repo.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class BookController {
    @Autowired
    private BookRepo bookRepository;

    @GetMapping("/books")
    public ResponseEntity<List<Book>> getBooks() {
        try {
            List<Book> bookList = new ArrayList<>();
            bookRepository.findAll().forEach(bookList::add);

            if (bookList.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(bookList, HttpStatus.OK);
        } catch (Exception exception) {
            System.out.println("Could not obtain books!" + exception);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/book/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        try {
            Optional<Book> book = bookRepository.findById(id);

            if (book.isPresent()) {
                return new ResponseEntity<>(book.get(), HttpStatus.OK);
            }

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception exception) {
            System.out.println("Could not obtain books!" + exception);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/book/new")
    public ResponseEntity<Book> addBook(@RequestBody Book newBook) {
        try {
            Book book = bookRepository.save(newBook);

            return new ResponseEntity<>(book, HttpStatus.OK);
        } catch (Exception exception) {
            System.out.println("Could not update book!" + exception);

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/book/{id}/update")
    public ResponseEntity<Book> updateBook(@RequestBody Book updatedBook, @PathVariable Long id) {
        try {
            Optional<Book> book = bookRepository.findById(id);

            if (book.isPresent()) {
                Book oldBook = book.get();

                oldBook.setTitle(updatedBook.getTitle());
                oldBook.setAuthor(updatedBook.getAuthor());

                bookRepository.save(oldBook);

                return new ResponseEntity<>(oldBook, HttpStatus.OK);
            }

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception exception) {
            System.out.println("Could not update the book!" + exception);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/book/{id}/delete")
    public ResponseEntity<HttpStatus> deleteBook(@PathVariable Long id) {
        try {
            bookRepository.deleteById(id);

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception exception) {
            System.out.println("Could not delete the book!" + exception);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
