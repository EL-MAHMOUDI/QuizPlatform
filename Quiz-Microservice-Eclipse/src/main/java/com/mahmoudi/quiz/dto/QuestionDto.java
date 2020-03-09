package com.mahmoudi.quiz.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data @NoArgsConstructor @AllArgsConstructor
@ToString
public class QuestionDto {
    private Long id;
    private String question;
    private String option_1;
    private String option_2;
    private String option_3;
    private String option_4;
    private int answer;
}
