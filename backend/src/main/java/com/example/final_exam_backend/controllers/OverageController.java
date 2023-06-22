package com.example.final_exam_backend.controllers;

import com.example.final_exam_backend.models.Overage;
import com.example.final_exam_backend.services.OverageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api")
public class OverageController {

    @Autowired
    private OverageService overageService;

    @PostMapping("/overage")
    public ResponseEntity<String> receiveOverage(@RequestParam Integer userId, @RequestBody Overage overageRequest) {
        Integer overage = overageRequest.getOverage();


        // Call the service method to add the overage
        Overage addedOverage = overageService.addOverage(userId, overage);

        if (addedOverage != null) {
            return ResponseEntity.ok("Overage added successfully");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add overage");
        }
    }

    @GetMapping("/overages/last30days")
    public ResponseEntity<List<Overage>> getLast30DaysOverages(@RequestParam("userId") Integer userId) {
        try {
            LocalDate currentDate = LocalDate.now();
            LocalDate thirtyDaysAgo = currentDate.minusDays(30);
            List<Overage> overages = overageService.getLast30DaysOverages(thirtyDaysAgo, currentDate, userId);
            return ResponseEntity.ok(overages);
        } catch (Exception e) {
            // Handle any potential exceptions or log the error
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }



}
