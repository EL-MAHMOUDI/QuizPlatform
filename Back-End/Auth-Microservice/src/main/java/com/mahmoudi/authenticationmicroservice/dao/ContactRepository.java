package com.mahmoudi.authenticationmicroservice.dao;

import com.mahmoudi.authenticationmicroservice.entities.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}
