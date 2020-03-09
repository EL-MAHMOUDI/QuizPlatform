package com.mahmoudi.quiz.mappers;

import com.mahmoudi.quiz.dto.QuestionDto;
import com.mahmoudi.quiz.entities.Question;
import org.springframework.stereotype.Component;

import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2020-03-09T17:23:56+0100",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 11.0.6 (Ubuntu)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public QuestionDto entityToDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionDto questionDto = new QuestionDto();
        questionDto.setId(question.getId());
        questionDto.setQuestion(question.getQuestion());
        questionDto.setAnswer(question.getAnswer());
        questionDto.setOption_1(question.getOption_1());
        questionDto.setOption_2(question.getOption_2());
        questionDto.setOption_3(question.getOption_3());
        questionDto.setOption_4(question.getOption_4());
        return questionDto;
    }

    @Override
    public Question dtoToEntity(QuestionDto questionDto) {
        if ( questionDto == null ) {
            return null;
        }

        Question question = new Question();
        question.setId(questionDto.getId());
        question.setAnswer(questionDto.getAnswer());
        question.setQuestion(questionDto.getQuestion());
        question.setOption_1(questionDto.getOption_1());
        question.setOption_2(questionDto.getOption_2());
        question.setOption_3(questionDto.getOption_3());
        question.setOption_4(questionDto.getOption_4());
        return question;
    }
}
