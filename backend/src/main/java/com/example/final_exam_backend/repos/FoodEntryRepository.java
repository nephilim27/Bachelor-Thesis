package com.example.final_exam_backend.repos;

import com.example.final_exam_backend.models.FoodEntry;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodEntryRepository extends JpaRepository<FoodEntry, Integer> {

   List<FoodEntry> findByUserId(Integer userid, Sort sort);

}

