package com.mahmoudi.quiz.models;

import com.mahmoudi.quiz.entities.Question;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;
@Data @NoArgsConstructor @ToString
public class UpdatedTest {
    private String username;
    private String categorie;
    private String testLevel;
    private List<Question> formArray;
}
