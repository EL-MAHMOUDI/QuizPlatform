package com.mahmoudi.quiz.services;

import com.mahmoudi.quiz.dao.AnswerRepository;
import com.mahmoudi.quiz.dao.SingleAnswerRepository;
import com.mahmoudi.quiz.dao.TestRepository;
import com.mahmoudi.quiz.entities.Answer;
import com.mahmoudi.quiz.entities.Question;
import com.mahmoudi.quiz.entities.SingleAnswer;
import com.mahmoudi.quiz.models.AnswerModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class AnswerServiceImp implements AnswerService {
    @Autowired
    private AnswerRepository answerRepository;
    @Autowired
    private TestRepository testRepository;
    @Autowired
    private SingleAnswerRepository singleAnswerRepository;
    @Override
    public Answer submitAnswer(AnswerModel answerModel) {
        Long testId = answerModel.getTestId();
        List<Integer> submittedAnswers = answerModel.getAnswers();
        List<Integer> correctAnswers = getCorrectAnswers(testId);
        int score = processScore(submittedAnswers, correctAnswers);
        List<SingleAnswer> answers = submitSingleAnswers(submittedAnswers);
        Answer answer = new Answer();
        answer.setUsername(answerModel.getUsername());
        answer.setCategory(answerModel.getCategory());
        answer.setTestLevel(answerModel.getTestLevel());
        answer.setTestId(answerModel.getTestId());
        answer.setAnswers(answers);
        answer.setScore(score);
        return answerRepository.save(answer);
    }

    @Override
    public List<Integer> getCorrectAnswers(Long testId) {
        List<Question> questions = testRepository.findById(testId).get().getQuestions();
        List<Integer> correctAnswers = questions.stream()
                .map(Question::getAnswer)
                .collect(Collectors.toList());
        return correctAnswers;
    }

    @Override
    public int processScore(List<Integer> submittedAnswers, List<Integer> correctAnswers) {
        int score = 0;
        for(int i=0; i<correctAnswers.size(); i++){
            if (submittedAnswers.get(i) == correctAnswers.get(i)){
                score++;
            }
        }
        return score;
    }

    @Override
    public List<SingleAnswer> submitSingleAnswers(List<Integer> singleAnswers) {
        List<SingleAnswer> submittedSingleAnswers =
                singleAnswers.stream()
                        .map(answer -> {
                           SingleAnswer singleAnswer = new SingleAnswer();
                           singleAnswer.setAnswer(answer);
                           return singleAnswer;
                        }).collect(Collectors.toList());
        submittedSingleAnswers = singleAnswerRepository.saveAll(submittedSingleAnswers);
        return submittedSingleAnswers;
    }


}
