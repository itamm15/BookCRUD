package com.osinskimat.SimpleCRUD.controller;

import com.osinskimat.SimpleCRUD.model.Author;
import com.osinskimat.SimpleCRUD.repo.AuthorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthorController {
    @Autowired
    private AuthorRepo authorRepository;

    @PostMapping("/author/new")
    public ResponseEntity<Author> createAuthor(@RequestBody Author requestedAuthor) {
        try {
            Author newAuthor = new Author();

            newAuthor.setEmail(requestedAuthor.getEmail());
            newAuthor.setFirstname(requestedAuthor.getFirstname());
            newAuthor.setLastname(requestedAuthor.getLastname());
            newAuthor.setBirthDate(requestedAuthor.getBirthDate());

            Author savedAuthor = authorRepository.save(newAuthor);

            return new ResponseEntity<>(savedAuthor, HttpStatus.OK);
        } catch (Exception exception) {
            System.out.println("Could not create author, " + exception);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
