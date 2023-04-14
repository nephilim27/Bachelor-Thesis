package com.example.final_exam_backend.endpoints;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Timestamp;


@Entity
@Table(name = "SleepEntry")
public class SleepEntry extends Entry {
    @Column
    private Timestamp duration;
    @Column
    private Timestamp completedAt;


}
