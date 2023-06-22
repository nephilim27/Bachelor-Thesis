package com.example.final_exam_backend.repos;

import com.example.final_exam_backend.models.FoodEntry;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface FoodEntryRepository extends JpaRepository<FoodEntry, Integer> {

   List<FoodEntry> findByUserId(Integer userid, Sort sort);

   @Query("SELECT f FROM FoodEntry f WHERE f.user.id = :userId AND f.consumedAt BETWEEN :startDate AND :endDate")
   List<FoodEntry> findByUserIdAndConsumedAtBetween(Integer userId, Date startDate, Date endDate);

}

