package com.example.final_exam_backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;


@Entity
@Table(name = "SleepEntry")
public class SleepEntry extends Entry {
    @Column
    private Date duration;
    @Column
    @CreationTimestamp
    private Date completedAt;

    public Date getDuration() {
        return duration;
    }

    public void setDuration(Date duration) {
        this.duration = duration;
    }

    public Date getCompletedAt() {
        return completedAt;
    }
}
