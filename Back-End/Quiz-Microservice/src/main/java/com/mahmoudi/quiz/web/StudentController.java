package com.mahmoudi.quiz.web;

import com.mahmoudi.quiz.dao.TestRepository;
import com.mahmoudi.quiz.models.AnswerModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private TestRepository testRepository;
    @PostMapping("/submitAnswer")
    public int submitAnswer(@RequestBody AnswerModel answer){
        System.out.println(answer);
        System.out.println(testRepository.findById(answer.getTestId()).get());
        return 0;
    }
}
