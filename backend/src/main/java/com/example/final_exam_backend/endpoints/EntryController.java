package com.example.final_exam_backend.endpoints;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/api")
public class EntryController {

    @Autowired
    private EntryService entryService;

    @PostMapping("/food")
    public ResponseEntity<Entry> addFoodEntry(@RequestBody Entry entry) {
        Entry savedEntry = entryService.addFoodEntry(entry);
        return ResponseEntity.created(URI.create("/api/food/" + savedEntry.getId())).body(savedEntry);
    }

    @PostMapping("/sleep")
    public ResponseEntity<Entry> addSleepEntry(@RequestBody Entry entry) {
        Entry savedEntry = entryService.addSleepEntry(entry);
        return ResponseEntity.created(URI.create("/api/sleep/" + savedEntry.getId())).body(savedEntry);
    }

    @PostMapping("/water")
    public ResponseEntity<Entry> addWaterEntry(@RequestBody Entry entry) {
        Entry savedEntry = entryService.addWaterEntry(entry);
        return ResponseEntity.created(URI.create("/api/water/" + savedEntry.getId())).body(savedEntry);
    }

    @PostMapping("/workout")
    public ResponseEntity<Entry> addWorkoutEntry(@RequestBody Entry entry) {
        Entry savedEntry = entryService.addWorkoutEntry(entry);
        return ResponseEntity.created(URI.create("/api/workout/" + savedEntry.getId())).body(savedEntry);
    }
}
