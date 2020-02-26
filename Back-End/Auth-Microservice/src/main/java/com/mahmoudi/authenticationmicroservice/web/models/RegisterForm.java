package com.mahmoudi.authenticationmicroservice.web.models;

import lombok.Data;

@Data
public class RegisterForm {
    private String username;
    private String password;
    private String passwordConfirmation;
}
