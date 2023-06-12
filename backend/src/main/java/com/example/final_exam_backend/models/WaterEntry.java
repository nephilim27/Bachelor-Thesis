package com.example.final_exam_backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "WaterEntry")
public class WaterEntry extends Entry {

    @Column
    private Integer amount;
    @Column
    private Date consumedAt;
}
