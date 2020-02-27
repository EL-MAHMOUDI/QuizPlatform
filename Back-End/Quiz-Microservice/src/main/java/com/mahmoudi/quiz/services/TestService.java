package com.mahmoudi.quiz.services;

import com.mahmoudi.quiz.entities.Test;
import com.mahmoudi.quiz.models.TestForm;

public interface TestService {
    public Test addTest(TestForm testForm);
}
