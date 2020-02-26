package com.mahmoudi.authenticationmicroservice.web.controllers;

import com.mahmoudi.authenticationmicroservice.entities.AppUser;
import com.mahmoudi.authenticationmicroservice.services.AccountService;
import com.mahmoudi.authenticationmicroservice.web.models.RegisterForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class UserController {
    @Autowired
    private AccountService accountService;
    @PostMapping
    public AppUser register(@RequestBody RegisterForm registerForm){
        AppUser user = accountService.saveUser(registerForm.getUsername(), registerForm.getPassword(), registerForm.getPasswordConfirmation());
        return accountService.addRoleToUser(user.getUsername(), "STUDENT");
    }
}
