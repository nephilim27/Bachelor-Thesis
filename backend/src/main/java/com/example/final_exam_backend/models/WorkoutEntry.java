package com.example.final_exam_backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;

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
    @CreationTimestamp
    private Date completedAt;

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getCaloriesBurnt() {
        return caloriesBurnt;
    }

    public void setCaloriesBurnt(Integer caloriesBurnt) {
        this.caloriesBurnt = caloriesBurnt;
    }

    public double getDuration() {
        return duration;
    }

    public void setDuration(double duration) {
        this.duration = duration;
    }
}
