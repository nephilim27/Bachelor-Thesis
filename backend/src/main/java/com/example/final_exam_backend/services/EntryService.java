package com.example.final_exam_backend.services;

import com.example.final_exam_backend.models.Entry;

import java.util.List;

public interface EntryService<T extends Entry> {

    List<T> getEntries(Integer userId);

    T addEntry(T entry, Integer userId);
}
