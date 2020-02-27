package com.mahmoudi.quiz.web;

import com.mahmoudi.quiz.dao.QuestionRepository;
import com.mahmoudi.quiz.dao.TestRepository;
import com.mahmoudi.quiz.entities.Question;
import com.mahmoudi.quiz.entities.Test;
import com.mahmoudi.quiz.models.TestForm;
import com.mahmoudi.quiz.services.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@RequestMapping("/coach")
@RestController
public class TestController {
    @Autowired
    private TestService testService;
    @PostMapping("/addTest")
    public Test addTest(@RequestBody TestForm testForm){
        return testService.addTest(testForm);
    }
}
