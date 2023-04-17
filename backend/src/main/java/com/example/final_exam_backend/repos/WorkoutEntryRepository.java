package com.example.final_exam_backend.repos;

import com.example.final_exam_backend.models.WorkoutEntry;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkoutEntryRepository extends JpaRepository<WorkoutEntry, Integer> {

   List<WorkoutEntry> findByUserId(Integer userid, Sort sort);

}

