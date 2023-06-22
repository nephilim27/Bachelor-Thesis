package com.example.final_exam_backend.models;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "Overage")
public class Overage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private Integer userID;

    @Column
    @CreationTimestamp
    private Date sentAt;

    @Column
    private Integer overage;

    public Integer getOverage() {
        return overage;
    }

    public void setOverage(Integer overage) {
        this.overage = overage;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }
}
