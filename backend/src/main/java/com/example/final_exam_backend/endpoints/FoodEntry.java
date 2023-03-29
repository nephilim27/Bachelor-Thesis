package com.example.final_exam_backend.endpoints;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.context.annotation.DeferredImportSelector;

import javax.swing.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "FoodEntry")
public class FoodEntry extends Entry {
    @Id
    private Integer id;
    @Column
    private String name;
    @Column
    private Integer calories;

    @Column
    private Timestamp consumedAt;

    @Column
    private Long userId;


}
