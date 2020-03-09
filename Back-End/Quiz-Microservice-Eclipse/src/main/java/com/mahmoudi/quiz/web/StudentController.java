package com.mahmoudi.quiz.web;

import com.mahmoudi.quiz.dao.TestRepository;
import com.mahmoudi.quiz.entities.Answer;
import com.mahmoudi.quiz.entities.Question;
import com.mahmoudi.quiz.models.AnswerModel;
import com.mahmoudi.quiz.services.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private AnswerService answerService;
    @PostMapping("/submitAnswer")
    public Answer submitAnswer(@RequestBody AnswerModel answer){
      return answerService.submitAnswer(answer);
    }
}
