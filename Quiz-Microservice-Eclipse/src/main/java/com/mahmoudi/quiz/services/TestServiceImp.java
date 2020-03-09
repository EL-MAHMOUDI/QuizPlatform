package com.mahmoudi.quiz.services;

import com.mahmoudi.quiz.dao.QuestionRepository;
import com.mahmoudi.quiz.dao.TestRepository;
import com.mahmoudi.quiz.entities.Question;
import com.mahmoudi.quiz.entities.Test;
import com.mahmoudi.quiz.models.TestForm;
import com.mahmoudi.quiz.models.UpdatedTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class TestServiceImp implements TestService {
    @Autowired
    private TestRepository testRepository;
    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public Test addTest(TestForm testForm) {
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
    public Test updateTest(Long testId, UpdatedTest updatedTest){
        Test testToUpdate = testRepository.findById(testId).get();
        List<Question> questions = updatedTest.getFormArray();
        questions = questionRepository.saveAll(questions);
        testToUpdate.setQuestions(questions);
        testToUpdate.setTestLevel(updatedTest.getTestLevel());
        testToUpdate.setCategorie(updatedTest.getCategorie());
        testToUpdate.setUsername(updatedTest.getUsername());
        return testRepository.save(testToUpdate);
    }

}
