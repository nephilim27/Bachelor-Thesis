package com.example.final_exam_backend.endpoints;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "FoodEntry")
public class FoodEntry extends Entry {
    @Column
    private String name;
    @Column
    private Integer calories;

    @Column
    private Timestamp consumedAt;

    public Integer getCalories() {
        return calories;
    }
}
