package com.example.final_exam_backend.models;

import jakarta.persistence.*;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

@Entity
@Table(name = "UserData")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    @Column
    public String name;
    @Column
    public String email;
    @Column
    public double height;
    @Column
    public double currentWeight;
    @Column
    public double startWeight;
    @Column
    public double goalWeight;
    @Column
    public String goalDate;
    @Column
    public String sex;
    @Column
    public int age;
    @Column
    public String birthDate;
    @Column
    public String activityLevel;
    @Column
    public int weeklyGoal;
    @Transient
    public double calorieBudget;
    @Transient
    public double waterIntake;
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user", orphanRemoval = true)
//    private List<FoodEntry> foodEntries;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user", orphanRemoval = true)
//    private List<SleepEntry> sleepEntries;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user", orphanRemoval = true)
//    private List<WaterEntry> waterEntries;
//
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user", orphanRemoval = true)
//    private List<WorkoutEntry> workoutEntries;

    public double calculateCalorieBudget() {
        if (this.getSex().equals("M")){
            return 66.5 + (13.8 * this.getCurrentWeight()) + ((5 * this.getHeight()) / (6.8 * this.getAge()));
        }
        else if (this.getSex().equals("F")){
            return 655.1 + (9.6 * this.getCurrentWeight()) + ((1.9 * this.getHeight()) / (4.7 * this.getAge()));
        }

        return 0;
    }

    public double calculateWaterIntake(){

        return 35 * this.getCurrentWeight();
    }

    @PostLoad
    public void postLoad(){
        this.calorieBudget = calculateCalorieBudget();
        this.waterIntake = calculateWaterIntake();
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getCurrentWeight() {
        return currentWeight;
    }

    public void setCurrentWeight(double currentWeight) {
        this.currentWeight = currentWeight;
    }


    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }


    public String getActivityLevel() {
        return activityLevel;
    }

    public void setActivityLevel(String activityLevel) {
        this.activityLevel = activityLevel;
    }


}






