package com.example.admin_dashboard.service;


import com.example.admin_dashboard.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    public User getAdminDetails() {
        User admin = new User();
        admin.setId("1");
        admin.setName("Admin");
        admin.setEmail("admin@example.com");
        return admin;
    }
}