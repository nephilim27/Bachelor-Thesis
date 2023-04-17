package com.example.final_exam_backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "FoodEntry")
public class FoodEntry extends Entry {
    @Column
    private String name;
    @Column
    private Integer calories;

    @Column
    private LocalDate consumedAt;

    public Integer getCalories() {
        return calories;
    }
}
