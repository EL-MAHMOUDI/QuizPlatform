package com.mahmoudi.quiz.dao;

import com.mahmoudi.quiz.entities.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<Test, Long> {
}
