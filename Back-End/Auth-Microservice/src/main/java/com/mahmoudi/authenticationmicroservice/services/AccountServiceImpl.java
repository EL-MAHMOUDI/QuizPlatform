package com.mahmoudi.authenticationmicroservice.services;

import com.mahmoudi.authenticationmicroservice.dao.AppRoleRepository;
import com.mahmoudi.authenticationmicroservice.dao.AppUserRepository;
import com.mahmoudi.authenticationmicroservice.entities.AppRole;
import com.mahmoudi.authenticationmicroservice.entities.AppUser;
import com.mahmoudi.authenticationmicroservice.entities.Contact;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class AccountServiceImpl implements  AccountService{
    private AppUserRepository appUserRepository;
    private AppRoleRepository appRoleRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public AccountServiceImpl(AppUserRepository appUserRepository, AppRoleRepository appRoleRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.appUserRepository = appUserRepository;
        this.appRoleRepository = appRoleRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }


    @Override
    public AppUser saveUser(String username, String password, String confirmedPassword, Contact contact) {
        AppUser user = loadUserByUsername(username);
        if(user != null) throw new RuntimeException("Username is already taken");
        System.out.println(password);
        System.out.println(confirmedPassword);
        if (!password.equals(confirmedPassword)) throw new RuntimeException(("Passwords don't match"));
        user = new AppUser();
        user.setUsername(username);
        user.setPassword(bCryptPasswordEncoder.encode(password));
        user.setContact(contact);
        user.setActive(true);
        return appUserRepository.save(user);
    }

    @Override
    public AppRole saveRole(AppRole role) {
        return appRoleRepository.save(role);
    }

    @Override
    public AppUser loadUserByUsername(String username) {
        return appUserRepository.findByUsername(username);
    }

    @Override
    public AppRole loadRoleByRoleName(String roleName) {
        return appRoleRepository.findByRoleName(roleName);
    }

    @Override
    public AppUser addRoleToUser(String username, String roleName) {
        AppUser user = loadUserByUsername(username);
        AppRole role = loadRoleByRoleName(roleName);
        user.getRoles().add(role);
        return user;
        //appUserRepository.save(user);
    }
}
