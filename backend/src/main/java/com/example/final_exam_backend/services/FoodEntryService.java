package com.example.final_exam_backend.services;

import com.example.final_exam_backend.models.EntryType;
import com.example.final_exam_backend.models.FoodEntry;
import com.example.final_exam_backend.repos.FoodEntryRepository;
import com.example.final_exam_backend.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class FoodEntryService implements EntryService<FoodEntry> {

    @Autowired
    private FoodEntryRepository foodEntryRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<FoodEntry> getEntries(Integer userId) {
        return foodEntryRepository.findByUserId(userId, Sort.by(Sort.Direction.ASC, "consumedAt"));
    }

    @Override
    public FoodEntry addEntry(FoodEntry entry, Integer userId) {
        entry.setType(EntryType.FOOD);
        var user = userRepository.findById(userId).orElseThrow();
        entry.setUser(user);
        return foodEntryRepository.save(entry);
    }

}


