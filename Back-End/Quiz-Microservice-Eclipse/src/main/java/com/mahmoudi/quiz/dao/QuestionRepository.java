package com.mahmoudi.quiz.dao;

import com.mahmoudi.quiz.entities.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@RepositoryRestResource
public interface QuestionRepository extends JpaRepository<Question, Long> {
}
