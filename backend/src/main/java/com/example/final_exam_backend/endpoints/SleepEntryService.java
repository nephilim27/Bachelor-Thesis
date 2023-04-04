package com.example.final_exam_backend.endpoints;

import com.example.final_exam_backend.onboarding.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SleepEntryService implements EntryService<SleepEntry> {

    @Autowired
    private EntryRepository entryRepository;

    @Override
    public List<SleepEntry> getEntries(User user) {
        return entryRepository.findByUserAndType(user, EntryType.SLEEP)
                .stream()
                .map(SleepEntry.class::cast)
                .collect(Collectors.toList());
    }

    @Override
    public SleepEntry addEntry(SleepEntry entry, Integer userId) {
        entry.setType(EntryType.SLEEP);
        return entryRepository.save(entry);
    }
}