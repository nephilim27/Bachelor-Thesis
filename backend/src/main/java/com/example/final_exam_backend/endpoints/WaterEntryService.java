package com.example.final_exam_backend.endpoints;

import com.example.final_exam_backend.onboarding.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WaterEntryService implements EntryService<WaterEntry> {

    @Autowired
    private EntryRepository entryRepository;

    @Override
    public List<WaterEntry> getEntries(User user) {
        return entryRepository.findByUserAndType(user, EntryType.WATER)
                .stream()
                .map(WaterEntry.class::cast)
                .collect(Collectors.toList());
    }

    @Override
    public WaterEntry addEntry(WaterEntry entry) {
        entry.setType(EntryType.FOOD);
        return entryRepository.save(entry);
    }
}
