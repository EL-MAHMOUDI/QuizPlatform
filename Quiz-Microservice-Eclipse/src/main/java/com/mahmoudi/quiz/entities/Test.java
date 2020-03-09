package com.mahmoudi.quiz.entities;

import com.mahmoudi.quiz.entities.Question;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String categorie;
    private String testLevel;
    @OneToMany(fetch = FetchType.EAGER)
    private List<Question> questions;


}
