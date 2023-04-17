package com.example.final_exam_backend.repos;

import com.example.final_exam_backend.models.WaterEntry;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WaterEntryRepository extends JpaRepository<WaterEntry, Integer> {

   List<WaterEntry> findByUserId(Integer userid, Sort sort);

}

