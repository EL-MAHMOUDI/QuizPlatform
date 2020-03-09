package com.mahmoudi.quiz.mappers;

import com.mahmoudi.quiz.dto.QuestionDto;
import com.mahmoudi.quiz.entities.Question;
import org.mapstruct.Mapper;

@Mapper
public interface QuestionMapper {
    QuestionDto entityToDto(Question question);
    Question dtoToEntity(QuestionDto questionDto);
}
