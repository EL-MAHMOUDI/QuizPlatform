package com.mahmoudi.quiz.services;

import com.mahmoudi.quiz.entities.Answer;
import com.mahmoudi.quiz.entities.SingleAnswer;
import com.mahmoudi.quiz.models.AnswerModel;

import java.util.List;

public interface AnswerService {
    public Answer submitAnswer(AnswerModel answerModel);
    public List<Integer> getCorrectAnswers(Long testId);
    public int processScore(List<Integer> submittedAnswers, List<Integer> correctAnswers);
    public List<SingleAnswer> submitSingleAnswers(List<Integer> singleAnswers);
}
