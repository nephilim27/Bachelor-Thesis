package com.example.final_exam_backend.repos;

import com.example.final_exam_backend.models.Foods;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodsRepository extends JpaRepository<Foods, Integer> {

    List<Foods> findAll();

    List<Foods> findByNameContainingIgnoreCase(String query);

}
