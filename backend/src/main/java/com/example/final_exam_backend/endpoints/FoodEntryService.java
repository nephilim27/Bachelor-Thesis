package com.example.final_exam_backend.endpoints;

import com.example.final_exam_backend.onboarding.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FoodEntryService implements EntryService<FoodEntry> {

    @Autowired
    private EntryRepository entryRepository;

    @Override
    public List<FoodEntry> getEntries(User user) {
        return entryRepository.findByUserAndType(user, EntryType.FOOD)
                .stream()
                .map(FoodEntry.class::cast)
                .collect(Collectors.toList());
    }

    @Override
    public FoodEntry addEntry(FoodEntry entry) {
        entry.setType(EntryType.FOOD);
        return entryRepository.save(entry);
    }
    public List<FoodEntry> getFoodEntriesByUserAndDate(User user, LocalDate date) {
        return entryRepository.findByUserAndDate(user, date);
    }

    public int getTotalCaloriesConsumedOnDay(User user, LocalDate date) {
        List<FoodEntry> foodEntries = getFoodEntriesByUserAndDate(user, date);
        int totalCalories = 0;
        for (FoodEntry entry : foodEntries) {
            totalCalories += entry.getCalories();
        }
        return totalCalories;
    }
}


