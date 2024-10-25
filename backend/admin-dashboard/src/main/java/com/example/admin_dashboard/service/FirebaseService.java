package com.example.admin_dashboard.service;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.FirebaseApp;
import org.springframework.stereotype.Service;

@Service
public class FirebaseService {

    private final DatabaseReference databaseReference;

    public FirebaseService(FirebaseApp firebaseApp) {
        this.databaseReference = FirebaseDatabase.getInstance(firebaseApp).getReference();
    }

    public DatabaseReference getDatabaseReference() {
        return databaseReference;
    }
}
