package com.example.final_exam_backend.endpoints;

import com.example.final_exam_backend.onboarding.User;

import java.util.List;

public interface EntryService<T extends Entry> {

    List<T> getEntries(User user);

    T addEntry(T entry);
}
