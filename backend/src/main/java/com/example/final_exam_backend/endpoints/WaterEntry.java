package com.example.final_exam_backend.endpoints;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Timestamp;

@Entity
@Table(name = "WaterEntry")
public class WaterEntry extends Entry{
    @Id
    private Integer id;
    @Column
    private Long userId;
    @Column
    private Integer amount;
    @Column
    private Timestamp consumedAt;
}
