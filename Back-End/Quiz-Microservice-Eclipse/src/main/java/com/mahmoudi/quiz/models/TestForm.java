package com.mahmoudi.quiz.models;

import com.mahmoudi.quiz.entities.Question;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class TestForm {
    private String username;
    private String category;
    private String difficulty;
    private List<Question> questions;
}
