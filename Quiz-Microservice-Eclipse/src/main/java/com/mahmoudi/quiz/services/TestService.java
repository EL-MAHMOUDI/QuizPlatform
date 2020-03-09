package com.mahmoudi.quiz.services;

import com.mahmoudi.quiz.entities.Test;
import com.mahmoudi.quiz.models.TestForm;
import com.mahmoudi.quiz.models.UpdatedTest;

public interface TestService {
    public Test addTest(TestForm testForm);
    public Test updateTest(Long testId, UpdatedTest updatedTest);
}
