package com.mahmoudi.authenticationmicroservice.dao;

import com.mahmoudi.authenticationmicroservice.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    public AppUser findByUsername(String username);
}
