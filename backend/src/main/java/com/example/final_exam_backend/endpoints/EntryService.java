package com.example.final_exam_backend.endpoints;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EntryService {

    @Autowired
    private EntryRepository entryRepository;

    public Entry addFoodEntry(Entry entry) {
        validateEntry(entry);
        entry.setType(EntryType.FOOD);
        return entryRepository.save(entry);
    }

    public Entry addWaterEntry(Entry entry) {
        validateEntry(entry);
        entry.setType(EntryType.WATER);
        return entryRepository.save(entry);
    }

    public Entry addWorkoutEntry(Entry entry) {
        validateEntry(entry);
        entry.setType(EntryType.WORKOUT);
        return entryRepository.save(entry);
    }

    public Entry addSleepEntry(Entry entry) {
        validateEntry(entry);
        entry.setType(EntryType.SLEEP);
        return entryRepository.save(entry);
    }

    private void validateEntry(Entry entry) {
        if (entry.getUser() == null) {
            throw new IllegalArgumentException("User is required for all entries");
        }
        if (entry.getType() == null) {
            throw new IllegalArgumentException("Entry type is required");
        }
    }
}
