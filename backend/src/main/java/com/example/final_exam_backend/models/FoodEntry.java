package com.example.final_exam_backend.models;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "FoodEntry")
public class FoodEntry extends Entry {
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private Integer calories;

    @Column
    @CreationTimestamp
    private Date consumedAt;

    @Column
    private String mealType;

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getConsumedAt() {
        return consumedAt;
    }

    public void setConsumedAt(Date consumedAt) {
        this.consumedAt = consumedAt;
    }

    public String getMealType() {
        return mealType;
    }

    public void setMealType(String mealType) {
        this.mealType = mealType;
    }
}
