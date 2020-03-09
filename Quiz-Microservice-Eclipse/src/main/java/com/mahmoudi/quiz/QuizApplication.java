package com.mahmoudi.quiz;

import com.mahmoudi.quiz.dao.QuestionRepository;
import com.mahmoudi.quiz.dao.TestRepository;
import com.mahmoudi.quiz.dto.QuestionDto;
import com.mahmoudi.quiz.dto.QuestionMapper;
import com.mahmoudi.quiz.entities.Question;
import com.mahmoudi.quiz.entities.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@SpringBootApplication
public class QuizApplication {
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private TestRepository testRepository;

    public static void main(String[] args) {
        SpringApplication.run(QuizApplication.class, args);
    }

    @Bean
    public CommandLineRunner dataLoader() throws Exception {
        return args -> {
            List<Question> questions = new ArrayList<>();
            Question q1 = new Question(null, "Which of the following is not a keyword in Java.", "implement", "friend", "NULL", "synchronized", 2);
            Question q2 = new Question(null, "What is the meaning of the return data type void?", "An empty memory space is returned so that the developers can utilize it.", "void is not supported in Java", "void returns no data type.", " null", 3);
            Question q3 = new Question(null, "Why we use @Override annotation?", "To check whether the subclass method is overrides from the superclass or not", "To say to the compiler not to execute this override method.", "To say to compiler that this method is deprecated", "  None of the above", 3);
            Question q4 = new Question(null, "What is the minimum value of char type. Select the one correct answer ?", "0", "-215", "-128", "-215 - 1", 2);
            Question q5 = new Question(null, "What is the minimum value of char type. Select the one correct answer ?", "0", "-215", "-128", "-215 - 1", 2);
            Question q6 = new Question(null, "What is the minimum value of char type. Select the one correct answer ?", "0", "-215", "-128", "-215 - 1", 2);
            Question q7 = new Question(null, "What is the minimum value of char type. Select the one correct answer ?", "0", "-215", "-128", "-215 - 1", 2);
            Question q8 = new Question(null, "What is the minimum value of char type. Select the one correct answer ?", "0", "-215", "-128", "-215 - 1", 2);
            Question q9 = new Question(null, "What is the minimum value of char type. Select the one correct answer ?", "0", "-215", "-128", "-215 - 1", 2);
            Question q10 = new Question(null, "What is the minimum value of char type. Select the one correct answer ?", "0", "-215", "-128", "-215 - 1", 2);

            questions.add(q1);
            questions.add(q2);
            questions.add(q3);
            questions.add(q4);
            questions.add(q5);
            questions.add(q6);
            questions.add(q7);
            questions.add(q8);
            questions.add(q9);
            questions.add(q10);
            Test test = new Test();
            test.setUsername("java_coach");
            test.setCategorie("Java");
            test.setTestLevel("Easy");
            test.setQuestions(questionRepository.saveAll(questions));
            System.out.println(questions);
            testRepository.save(test);




        };
    }

}
