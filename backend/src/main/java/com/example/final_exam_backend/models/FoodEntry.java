package com.example.final_exam_backend.models;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "FoodEntry")
public class FoodEntry extends Entry {
    @Column
    private String name;
    @Column
    private Integer calories;

    @Column
    @CreationTimestamp
    private Date consumedAt;

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
}
