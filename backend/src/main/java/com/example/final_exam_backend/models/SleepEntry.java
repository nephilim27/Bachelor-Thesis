package com.example.final_exam_backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.util.Date;


@Entity
@Table(name = "SleepEntry")
public class SleepEntry extends Entry {
    @Column
    private Date duration;
    @Column
    private Date completedAt;


}
