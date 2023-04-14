package com.example.final_exam_backend.endpoints;

import java.util.List;

public interface EntryService<T extends Entry> {

    List<T> getEntries(Integer userId);

    T addEntry(T entry, Integer userId);
}
