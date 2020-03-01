package com.mahmoudi.quiz.dao;

import com.mahmoudi.quiz.entities.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RepositoryRestResource
public interface TestRepository extends JpaRepository<Test, Long> {
    Optional<Test> findById(Long id);
    List<Test> findByUsername(@Param("username") String username);
    public List<Test> findByCategorieAndTestLevel(@Param("categorie")String categorie, @Param("testLevel") String testLevel);
}
