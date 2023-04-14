package com.example.final_exam_backend.endpoints;

import com.example.final_exam_backend.onboarding.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

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
//    public List<FoodEntry> getFoodEntriesByUserAndDate(User user, LocalDate date) {
//        return entryRepository.findByUserAndDate(user, date);
//    }

//    public int getTotalCaloriesConsumedOnDay(User user, LocalDate date) {
//        List<FoodEntry> foodEntries = getFoodEntriesByUserAndDate(user, date);
//        int totalCalories = 0;
//        for (FoodEntry entry : foodEntries) {
//            totalCalories += entry.getCalories();
//        }
//        return totalCalories;
//    }
}


