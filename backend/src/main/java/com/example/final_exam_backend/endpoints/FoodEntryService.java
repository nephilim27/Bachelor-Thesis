package com.example.final_exam_backend.endpoints;

import com.example.final_exam_backend.onboarding.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}


