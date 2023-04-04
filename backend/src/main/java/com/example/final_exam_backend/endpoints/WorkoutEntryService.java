package com.example.final_exam_backend.endpoints;

import com.example.final_exam_backend.onboarding.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WorkoutEntryService implements EntryService<WorkoutEntry> {

    @Autowired
    private EntryRepository entryRepository;

    @Override
    public List<WorkoutEntry> getEntries(User user) {
        return entryRepository.findByUserAndType(user, EntryType.WORKOUT)
                .stream()
                .map(WorkoutEntry.class::cast)
                .collect(Collectors.toList());
    }

    @Override
    public WorkoutEntry addEntry(WorkoutEntry entry, Integer userId) {
        entry.setType(EntryType.FOOD);
        return entryRepository.save(entry);
    }
}