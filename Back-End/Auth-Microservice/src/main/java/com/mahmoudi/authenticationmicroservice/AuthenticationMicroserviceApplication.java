package com.mahmoudi.authenticationmicroservice;

import com.mahmoudi.authenticationmicroservice.dao.AppRoleRepository;
import com.mahmoudi.authenticationmicroservice.dao.AppUserRepository;
import com.mahmoudi.authenticationmicroservice.entities.AppRole;
import com.mahmoudi.authenticationmicroservice.entities.AppUser;
import com.mahmoudi.authenticationmicroservice.entities.Contact;
import com.mahmoudi.authenticationmicroservice.services.AccountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Stream;

@Slf4j
@SpringBootApplication
public class AuthenticationMicroserviceApplication {
    @Autowired
    AccountService accountService;
    @Autowired
    AppUserRepository userRepository;
    public static void main(String[] args) {
        SpringApplication.run(AuthenticationMicroserviceApplication.class, args);
    }
    @Bean
    CommandLineRunner loadData(){
        return args -> {
            AppRole userRole = new AppRole(null, "STUDENT");
            AppRole adminRole = new AppRole(null, "COACH");
            AppRole coachRole = new AppRole(null, "ADMIN");
            accountService.saveRole(userRole);
            accountService.saveRole(coachRole);
            accountService.saveRole(adminRole);

            Stream.of("student", "student2", "student3", "student4").forEach(
                    username -> {
                        accountService.saveUser(username, "amineM@1234", "amineM@1234", null);
                        accountService.addRoleToUser(username, "STUDENT");
                    }
            );
            Stream.of("coach","java_coach", "spring_coach", "nodeJS_coach").forEach(
                    username -> {
                        accountService.saveUser(username, "amineM@1234", "amineM@1234", null);
                        accountService.addRoleToUser(username, "COACH");
                    }
            );
            accountService.saveUser("admin", "amineM@1234", "amineM@1234", null);
            accountService.addRoleToUser("admin", "ADMIN");
        };
    }
    @Bean
    BCryptPasswordEncoder getBCPE(){
        return new BCryptPasswordEncoder();
    }




}
