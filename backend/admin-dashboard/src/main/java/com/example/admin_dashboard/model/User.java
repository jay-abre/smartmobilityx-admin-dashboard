package com.example.admin_dashboard.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Setter
@Getter
public class User {
    private String id;
    private String name;
    private String email;

    // Getters and Setters
}