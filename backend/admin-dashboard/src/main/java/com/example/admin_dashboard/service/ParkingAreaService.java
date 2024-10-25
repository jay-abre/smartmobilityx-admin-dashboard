package com.example.admin_dashboard.service;

import com.example.admin_dashboard.model.ParkingArea;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import com.google.firebase.database.DatabaseError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ParkingAreaService {

    @Autowired
    private FirebaseService firebaseService;

    public List<ParkingArea> getAllParkingAreas() {
        List<ParkingArea> parkingAreas = new ArrayList<>();
        DatabaseReference ref = firebaseService.getDatabaseReference().child("parking-areas");

        ref.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                for (DataSnapshot snapshot : dataSnapshot.getChildren()) {
                    ParkingArea area = snapshot.getValue(ParkingArea.class);
                    parkingAreas.add(area);
                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {
                // Handle possible errors.
            }
        });

        return parkingAreas;
    }
}