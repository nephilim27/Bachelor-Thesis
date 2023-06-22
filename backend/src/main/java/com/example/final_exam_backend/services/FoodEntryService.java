package com.example.final_exam_backend.services;

import com.example.final_exam_backend.models.EntryType;
import com.example.final_exam_backend.models.FoodEntry;
import com.example.final_exam_backend.repos.FoodEntryRepository;
import com.example.final_exam_backend.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        FoodEntry newEntry = new FoodEntry();
        newEntry.setType(EntryType.FOOD);
        newEntry.setName(entry.getName());
        newEntry.setCalories(entry.getCalories());
        newEntry.setConsumedAt(entry.getConsumedAt());
        newEntry.setMealType(entry.getMealType());

        var user = userRepository.findById(userId).orElseThrow();
        newEntry.setUser(user);

        foodEntryRepository.save(newEntry);
        return newEntry;
    }

    public List<FoodEntry> getEntriesByDateRange(Integer userId, Date startDate, Date endDate) {
        // Retrieve the food entries for the specified user and date range
        List<FoodEntry> entries = foodEntryRepository.findByUserIdAndConsumedAtBetween(userId, startDate, endDate);

        // If no entries found, return an empty list
        if (entries == null) {
            return new ArrayList<>();
        }

        return entries;
    }


    public void deleteEntry(Integer id) {
        foodEntryRepository.deleteById(id);
    }


}


