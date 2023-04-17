package com.example.final_exam_backend.services;

import com.example.final_exam_backend.models.EntryType;
import com.example.final_exam_backend.models.WaterEntry;
import com.example.final_exam_backend.repos.UserRepository;
import com.example.final_exam_backend.repos.WaterEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WaterEntryService implements EntryService<WaterEntry> {

    @Autowired
    private WaterEntryRepository waterEntryRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<WaterEntry> getEntries(Integer userId) {
        return waterEntryRepository.findByUserId(userId, Sort.by(Sort.Direction.ASC, "consumedAt"));
    }

    @Override
    public WaterEntry addEntry(WaterEntry entry, Integer userId) {
        entry.setType(EntryType.WATER);
        var user = userRepository.findById(userId).orElseThrow();
        entry.setUser(user);
        return waterEntryRepository.save(entry);
    }
}
