package com.mahmoudi.quiz.dao;

import com.mahmoudi.quiz.entities.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@RepositoryRestResource
public interface TestRepository extends JpaRepository<Test, Long> {
    List<Test> findByUsername(@Param("username") String username);
}
