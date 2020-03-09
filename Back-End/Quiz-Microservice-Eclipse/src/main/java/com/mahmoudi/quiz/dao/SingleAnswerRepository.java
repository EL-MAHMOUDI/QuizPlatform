package com.mahmoudi.quiz.dao;

import com.mahmoudi.quiz.entities.SingleAnswer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SingleAnswerRepository extends JpaRepository<SingleAnswer, Long> {
}
