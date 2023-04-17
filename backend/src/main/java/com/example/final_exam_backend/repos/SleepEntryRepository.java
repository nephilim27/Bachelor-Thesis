package com.example.final_exam_backend.repos;

import com.example.final_exam_backend.models.SleepEntry;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SleepEntryRepository extends JpaRepository<SleepEntry, Integer> {

   List<SleepEntry> findByUserId(Integer userid, Sort sort);

}

