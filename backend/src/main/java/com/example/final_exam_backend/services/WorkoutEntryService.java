package com.example.final_exam_backend.services;

import com.example.final_exam_backend.models.EntryType;
import com.example.final_exam_backend.models.FoodEntry;
import com.example.final_exam_backend.models.WorkoutEntry;
import com.example.final_exam_backend.repos.UserRepository;
import com.example.final_exam_backend.repos.WorkoutEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkoutEntryService implements EntryService<WorkoutEntry> {

    @Autowired
    private WorkoutEntryRepository workoutEntryRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<WorkoutEntry> getEntries(Integer userId) {
        return workoutEntryRepository.findByUserId(userId, Sort.by(Sort.Direction.ASC, "completedAt"));
    }

    @Override
    public WorkoutEntry addEntry(WorkoutEntry entry, Integer userId) {
        WorkoutEntry newEntry = new WorkoutEntry();

        newEntry.setType(EntryType.WORKOUT);
        newEntry.setCaloriesBurnt(entry.getCaloriesBurnt());
        newEntry.setCategory(entry.getCategory());
        newEntry.setDuration(entry.getDuration());

        var user = userRepository.findById(userId).orElseThrow();
        newEntry.setUser(user);

        workoutEntryRepository.save(newEntry);
        return newEntry;
    }
}