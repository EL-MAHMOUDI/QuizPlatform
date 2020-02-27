package com.mahmoudi.quiz.configs;

import com.mahmoudi.quiz.entities.Participant;
import com.mahmoudi.quiz.entities.Question;
import com.mahmoudi.quiz.entities.Test;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class DataRestConfigurer {
    @Bean
    public RepositoryRestConfigurer repositoryRestConfigurer() {

        return new RepositoryRestConfigurer() {

            @Override
            public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
                config.exposeIdsFor(Question.class);
                config.exposeIdsFor((Participant.class));
                config.exposeIdsFor((Test.class));

            }
        };
    }
}
