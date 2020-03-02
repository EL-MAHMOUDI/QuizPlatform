package com.mahmoudi.quiz.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data @NoArgsConstructor @ToString
public class AnswerModel {
    private String username;
    private Long testId;
    private String category;
    private String testLevel;
    private List<Integer> answers;
}
