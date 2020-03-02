package com.mahmoudi.quiz.dao;

import com.mahmoudi.quiz.entities.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;

import javax.websocket.server.PathParam;
import java.util.List;

@CrossOrigin("*")
@RepositoryRestResource
public interface AnswerRepository extends JpaRepository<Answer,Long> {
    public List<Answer> findByUsername(@PathParam("username") String username);
}
