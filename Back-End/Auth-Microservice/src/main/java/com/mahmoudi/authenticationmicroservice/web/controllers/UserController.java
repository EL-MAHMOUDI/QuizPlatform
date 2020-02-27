package com.mahmoudi.authenticationmicroservice.web.controllers;

import com.mahmoudi.authenticationmicroservice.dao.AppUserRepository;
import com.mahmoudi.authenticationmicroservice.dao.ContactRepository;
import com.mahmoudi.authenticationmicroservice.entities.AppUser;
import com.mahmoudi.authenticationmicroservice.entities.Contact;
import com.mahmoudi.authenticationmicroservice.services.AccountService;
import com.mahmoudi.authenticationmicroservice.web.models.RegisterForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private AccountService accountService;
    @Autowired
    private ContactRepository contactRepository;
    @Autowired
    private AppUserRepository appUserRepository;
    @PostMapping("/register")
    public AppUser register(@RequestBody RegisterForm registerForm){
        Contact contact = new Contact();
        contact.setFirstName(registerForm.getFirstName());
        contact.setLastName(registerForm.getLastName());
        contact.setEmail(registerForm.getEmail());
        contact = contactRepository.save(contact);
        AppUser user = accountService.saveUser(registerForm.getUsername(), registerForm.getPassword(), registerForm.getPasswordConfirmation(), contact);
        return accountService.addRoleToUser(user.getUsername(), "STUDENT");
    }
    @GetMapping("/userDetails/{username}")
    public Contact getUserDetails(@PathVariable String username){
        AppUser user = appUserRepository.findByUsername(username);
        if(user != null){
            return user.getContact();
        }else{
            return null;
        }

    }
}
