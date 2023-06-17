package com.example.final_exam_backend.services;

import com.example.final_exam_backend.models.EntryType;
import com.example.final_exam_backend.models.FoodEntry;
import com.example.final_exam_backend.models.SleepEntry;
import com.example.final_exam_backend.repos.SleepEntryRepository;
import com.example.final_exam_backend.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SleepEntryService implements EntryService<SleepEntry> {

    @Autowired
    private SleepEntryRepository sleepentryRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<SleepEntry> getEntries(Integer userId) {
        return sleepentryRepository.findByUserId(userId, Sort.by(Sort.Direction.ASC, "completedAt"));
    }

    @Override
    public SleepEntry addEntry(SleepEntry entry, Integer userId) {
        SleepEntry newEntry = new SleepEntry();
        newEntry.setType(EntryType.SLEEP);
        newEntry.setDuration(entry.getDuration());
        var user = userRepository.findById(userId).orElseThrow();
        newEntry.setUser(user);
        sleepentryRepository.save(newEntry);
        return newEntry;
    }
}