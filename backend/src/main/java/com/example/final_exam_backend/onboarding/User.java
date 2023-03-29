package com.example.final_exam_backend.onboarding;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class User {
    @Id
    @Column
    public Integer id;
    @Column
    public String name;
    @Column
    public String email;
    @Column
    public String accessToken;
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
    @Column
    public boolean finishedOnboarding;

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

    public double getStartWeight() {
        return startWeight;
    }

    public void setStartWeight(double startWeight) {
        this.startWeight = startWeight;
    }

    public double getGoalWeight() {
        return goalWeight;
    }

    public void setGoalWeight(double goalWeight) {
        this.goalWeight = goalWeight;
    }

    public String getGoalDate() {
        return goalDate;
    }

    public void setGoalDate(String goalDate) {
        this.goalDate = goalDate;
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

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getActivityLevel() {
        return activityLevel;
    }

    public void setActivityLevel(String activityLevel) {
        this.activityLevel = activityLevel;
    }

    public int getWeeklyGoal() {
        return weeklyGoal;
    }

    public void setWeeklyGoal(int weeklyGoal) {
        this.weeklyGoal = weeklyGoal;
    }

    public boolean isFinishedOnboarding() {
        return finishedOnboarding;
    }

    public void setFinishedOnboarding(boolean finishedOnboarding) {
        this.finishedOnboarding = finishedOnboarding;
    }
}






