package com.mahmoudi.quiz.entities;

import com.mahmoudi.quiz.entities.SingleAnswer;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Data @NoArgsConstructor @ToString
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long testId;
    private String username;
    private String category;
    private String testLevel;
    @OneToMany(fetch = FetchType.EAGER)
    private List<SingleAnswer> answers;
    private int score;
}
