package com.example.admin_dashboard.controller;

import com.example.admin_dashboard.model.ParkingArea;
import com.example.admin_dashboard.service.ParkingAreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/parking-areas")
public class ParkingAreaController {

    @Autowired
    private ParkingAreaService parkingAreaService;

    @GetMapping
    public List<ParkingArea> getAllParkingAreas() {
        return parkingAreaService.getAllParkingAreas();
    }
}