package com.example.final_exam_backend.endpoints;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "FoodEntry")
public class FoodEntry extends Entry {
    @Id
    @GeneratedValue
    private Integer id;
    @Column
    private String name;
    @Column
    private Integer calories;

    @Column
    private Timestamp consumedAt;

    @Column
    private Long userId;

    public Integer getCalories() {
        return calories;
    }
}
