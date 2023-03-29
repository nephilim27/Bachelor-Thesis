package com.example.final_exam_backend.endpoints;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Timestamp;

@Entity
@Table(name = "WorkoutEntry")
public class WorkoutEntry extends Entry {
    @Id
    private Integer id;
    @Column
    private String category;
    @Column
    private Integer userId;
    @Column
    private Integer caloriesBurnt;
    @Column
    private double duration;
    @Column
    private Timestamp completedAt;
}
