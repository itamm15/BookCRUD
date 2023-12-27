package com.osinskimat.SimpleCRUD.repo;

import com.osinskimat.SimpleCRUD.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepo extends JpaRepository<Book, Long> {
}
