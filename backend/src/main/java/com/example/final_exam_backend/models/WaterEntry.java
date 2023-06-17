package com.example.final_exam_backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "WaterEntry")
public class WaterEntry extends Entry {

    @Column
    private Integer amount;
    @Column
    @CreationTimestamp
    private Date consumedAt;

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Date getConsumedAt() {
        return consumedAt;
    }
}
