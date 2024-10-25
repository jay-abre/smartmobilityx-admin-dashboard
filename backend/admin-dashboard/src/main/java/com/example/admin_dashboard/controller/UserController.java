package com.example.admin_dashboard.controller;

import com.example.admin_dashboard.model.User;
import com.example.admin_dashboard.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/admin")
    public User getAdminDetails() {
        return userService.getAdminDetails();
    }
}