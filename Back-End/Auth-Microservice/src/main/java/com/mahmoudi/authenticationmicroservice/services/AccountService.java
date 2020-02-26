package com.mahmoudi.authenticationmicroservice.services;

import com.mahmoudi.authenticationmicroservice.entities.AppRole;
import com.mahmoudi.authenticationmicroservice.entities.AppUser;

public interface AccountService {
    public AppUser saveUser(String username, String password, String confirmedPassword);
    public  AppRole saveRole(AppRole role);
    public AppUser loadUserByUsername(String username);
    public AppRole loadRoleByRoleName(String roleName);
    public AppUser addRoleToUser(String username, String roleName);
}
