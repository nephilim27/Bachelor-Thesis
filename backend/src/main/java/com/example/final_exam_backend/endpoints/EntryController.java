package com.example.final_exam_backend.endpoints;

import com.example.final_exam_backend.onboarding.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/entries")
public class EntryController {

    @Autowired
    private FoodEntryService foodEntryService;

    @Autowired
    private WaterEntryService waterEntryService;

    @Autowired
    private WorkoutEntryService workoutEntryService;

    @Autowired
    private SleepEntryService sleepEntryService;

    @GetMapping("/food")
    public List<FoodEntry> getFoodEntries(@AuthenticationPrincipal User user) {
        return foodEntryService.getEntries(user);
    }

    @PostMapping("/food")
    public FoodEntry addFoodEntry(@RequestBody FoodEntry entry, @AuthenticationPrincipal User user) {
        entry.setUser(user);
        return foodEntryService.addEntry(entry);
    }

    @GetMapping("/water")
    public List<WaterEntry> getWaterEntries(@AuthenticationPrincipal User user) {
        return waterEntryService.getEntries(user);
    }

    @PostMapping("/water")
    public WaterEntry addWaterEntry(@RequestBody WaterEntry entry, @AuthenticationPrincipal User user) {
        entry.setUser(user);
        return waterEntryService.addEntry(entry);
    }

    @GetMapping("/workout")
    public List<WorkoutEntry> getWorkoutEntries(@AuthenticationPrincipal User user) {
        return workoutEntryService.getEntries(user);
    }

    @PostMapping("/workout")
    public WorkoutEntry addWorkoutEntry(@RequestBody WorkoutEntry entry, @AuthenticationPrincipal User user){
        return workoutEntryService.addEntry(entry);

    }@GetMapping("/sleep")
    public List<SleepEntry> getSleepEntries(@AuthenticationPrincipal User user) {
        return sleepEntryService.getEntries(user);
    }

    @PostMapping("/sleep")
    public SleepEntry addSleepEntry(@RequestBody SleepEntry entry, @AuthenticationPrincipal User user){
        return sleepEntryService.addEntry(entry);
    }
}

