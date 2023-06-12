package com.example.final_exam_backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "WorkoutEntry")
public class WorkoutEntry extends Entry {
    @Column
    private String category;
    @Column
    private Integer caloriesBurnt;
    @Column
    private double duration;
    @Column
    private Date completedAt;
}
