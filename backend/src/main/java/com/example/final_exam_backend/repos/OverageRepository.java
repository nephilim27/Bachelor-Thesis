package com.example.final_exam_backend.repos;

import com.example.final_exam_backend.models.Overage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.security.Timestamp;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface OverageRepository extends JpaRepository<Overage, Integer> {
    List<Overage> findBySentAtBetweenAndUserID(java.sql.Timestamp startDate, java.sql.Timestamp endDate, Integer userId);
}
