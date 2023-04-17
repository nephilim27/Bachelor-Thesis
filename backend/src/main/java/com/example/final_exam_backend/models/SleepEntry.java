package com.example.final_exam_backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.time.LocalDateTime;


@Entity
@Table(name = "SleepEntry")
public class SleepEntry extends Entry {
    @Column
    private LocalDateTime duration;
    @Column
    private LocalDateTime completedAt;


}
