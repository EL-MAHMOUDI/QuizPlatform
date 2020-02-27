package com.mahmoudi.quiz.web;

import com.mahmoudi.quiz.dao.QuestionRepository;
import com.mahmoudi.quiz.dao.TestRepository;
import com.mahmoudi.quiz.entities.Question;
import com.mahmoudi.quiz.entities.Test;
import com.mahmoudi.quiz.models.TestForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RequestMapping("/coach")
@RestController
public class TestController {
    @Autowired
    private TestRepository testRepository;
    @Autowired
    private QuestionRepository questionRepository;
    @PostMapping("/addTest")
    public Test addTest(@RequestBody TestForm testForm){
        System.out.println(testForm);
        List<Question> questions = new ArrayList<>();
        testForm.getQuestions().forEach(
            question -> questions.add(questionRepository.save(question))
        );
        questions.forEach(question -> System.out.println(question));
        Test test = new Test();
        test.setUsername(testForm.getUsername());
        test.setCategorie(testForm.getCategory());
        test.setTestLevel(testForm.getDifficulty());
        test.setQuestions(questions);
        return testRepository.save(test);

    }
}
