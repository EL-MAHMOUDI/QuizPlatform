package com.mahmoudi.authenticationmicroservice.services;

import com.mahmoudi.authenticationmicroservice.entities.AppRole;
import com.mahmoudi.authenticationmicroservice.entities.AppUser;
import com.mahmoudi.authenticationmicroservice.entities.Contact;

public interface AccountService {
    public AppUser saveUser(String username, String password, String confirmedPassword, Contact contact);
    public  AppRole saveRole(AppRole role);
    public AppUser loadUserByUsername(String username);
    public AppRole loadRoleByRoleName(String roleName);
    public AppUser addRoleToUser(String username, String roleName);
}
