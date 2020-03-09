package com.mahmoudi.quiz.dto;

import com.mahmoudi.quiz.entities.Question;
import org.mapstruct.Mapper;

@Mapper
public interface QuestionMapper {
    QuestionDto entityToDto(Question question);
    Question dtoToEntity(QuestionDto questionDto);
}
