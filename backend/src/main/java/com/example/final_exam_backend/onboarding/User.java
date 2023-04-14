package com.example.final_exam_backend.onboarding;

import com.example.final_exam_backend.endpoints.FoodEntry;
import com.example.final_exam_backend.endpoints.SleepEntry;
import com.example.final_exam_backend.endpoints.WaterEntry;
import com.example.final_exam_backend.endpoints.WorkoutEntry;
import jakarta.persistence.*;

import java.util.List;

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
//    @Column
//    public String accessToken;
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
//    @Column
//    public boolean finishedOnboarding;
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

    public Integer getId() {
        return id;
    }

//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public double getHeight() {
//        return height;
//    }
//
//    public void setHeight(double height) {
//        this.height = height;
//    }
//
//    public double getCurrentWeight() {
//        return currentWeight;
//    }
//
//    public void setCurrentWeight(double currentWeight) {
//        this.currentWeight = currentWeight;
//    }
//
//    public double getStartWeight() {
//        return startWeight;
//    }
//
//    public void setStartWeight(double startWeight) {
//        this.startWeight = startWeight;
//    }
//
//    public double getGoalWeight() {
//        return goalWeight;
//    }
//
//    public void setGoalWeight(double goalWeight) {
//        this.goalWeight = goalWeight;
//    }
//
//    public String getGoalDate() {
//        return goalDate;
//    }
//
//    public void setGoalDate(String goalDate) {
//        this.goalDate = goalDate;
//    }
//
//    public String getSex() {
//        return sex;
//    }
//
//    public void setSex(String sex) {
//        this.sex = sex;
//    }
//
//    public int getAge() {
//        return age;
//    }
//
//    public void setAge(int age) {
//        this.age = age;
//    }
//
//    public String getBirthDate() {
//        return birthDate;
//    }
//
//    public void setBirthDate(String birthDate) {
//        this.birthDate = birthDate;
//    }
//
//    public String getActivityLevel() {
//        return activityLevel;
//    }
//
//    public void setActivityLevel(String activityLevel) {
//        this.activityLevel = activityLevel;
//    }
//
//    public int getWeeklyGoal() {
//        return weeklyGoal;
//    }
//
//    public void setWeeklyGoal(int weeklyGoal) {
//        this.weeklyGoal = weeklyGoal;
//    }
//
//    public boolean isFinishedOnboarding() {
//        return finishedOnboarding;
//    }
//
//    public void setFinishedOnboarding(boolean finishedOnboarding) {
//        this.finishedOnboarding = finishedOnboarding;
//    }
}






