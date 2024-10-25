package com.example.admin_dashboard.repository;

import com.example.admin_dashboard.model.ParkingArea;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingAreaRepository extends CrudRepository<ParkingArea, String> {
}