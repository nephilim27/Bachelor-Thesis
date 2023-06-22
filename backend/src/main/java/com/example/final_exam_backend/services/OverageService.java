package com.example.final_exam_backend.services;

import com.example.final_exam_backend.models.Overage;
import com.example.final_exam_backend.repos.OverageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Service
public class OverageService {

    @Autowired
    private OverageRepository overageRepository;

    public Overage addOverage(Integer userID, Integer overageValue) {
        Overage overage = new Overage();

        overage.setUserID(userID);
        overage.setOverage(overageValue);

        return overageRepository.save(overage);
    }

    public List<Overage> getLast30DaysOverages(LocalDate startDate, LocalDate endDate, Integer userId) {
        try {
            LocalDateTime startDateTime = startDate.atStartOfDay();
            LocalDateTime endDateTime = endDate.atTime(23, 59, 59); // Set the end time to the last second of the day
            Instant startInstant = startDateTime.atZone(ZoneId.systemDefault()).toInstant();
            Instant endInstant = endDateTime.atZone(ZoneId.systemDefault()).toInstant();
            Timestamp startTimestamp = Timestamp.from(startInstant);
            java.sql.Timestamp endTimestamp = java.sql.Timestamp.from(endInstant);
            return overageRepository.findBySentAtBetweenAndUserID(startTimestamp, endTimestamp, userId);
        } catch (Exception e) {
            // Handle any potential exceptions or log the error
            e.printStackTrace();
            throw new RuntimeException("Failed to retrieve overages for the last 30 days.");
        }
    }





}
