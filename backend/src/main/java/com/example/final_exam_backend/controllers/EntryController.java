package com.example.final_exam_backend.controllers;

import com.example.final_exam_backend.models.SleepEntry;
import com.example.final_exam_backend.models.WaterEntry;
import com.example.final_exam_backend.models.WorkoutEntry;
import com.example.final_exam_backend.services.*;
import com.example.final_exam_backend.models.FoodEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/entries")
public class EntryController {

    @Autowired
    private UserService userService;
    @Autowired
    private FoodEntryService foodEntryService;

    @Autowired
    private WaterEntryService waterEntryService;

    @Autowired
    private WorkoutEntryService workoutEntryService;

    @Autowired
    private SleepEntryService sleepEntryService;

    @GetMapping("/food")
    public List<FoodEntry> getFoodEntries(@RequestParam(value = "userId") Integer userId) {
        return foodEntryService.getEntries(userId);
    }

    @PostMapping("/food")
    public FoodEntry addFoodEntry(@RequestBody FoodEntry entry, @RequestParam(value = "user") Integer id) {
        return foodEntryService.addEntry(entry, id);
    }

    @GetMapping("/water")
    public List<WaterEntry> getWaterEntries(@RequestParam(value = "userId") Integer userId) {
        return waterEntryService.getEntries(userId);
    }

    @PostMapping("/water")
    public WaterEntry addWaterEntry(@RequestBody WaterEntry entry, @RequestParam(value = "user") Integer id) {
        return waterEntryService.addEntry(entry, id);
    }

    @GetMapping("/workout")
    public List<WorkoutEntry> getWorkoutEntries(@RequestParam(value = "userId") Integer userId) {
        return workoutEntryService.getEntries(userId);
    }

    @PostMapping("/workout")
    public WorkoutEntry addWorkoutEntry(@RequestBody WorkoutEntry entry, @RequestParam(value = "user") Integer id){
        return workoutEntryService.addEntry(entry, id);

    }@GetMapping("/sleep")
    public List<SleepEntry> getSleepEntries(@RequestParam(value = "userId") Integer userId) {
        return sleepEntryService.getEntries(userId);
    }

    @PostMapping("/sleep")
    public SleepEntry addSleepEntry(@RequestBody SleepEntry entry, @RequestParam(value = "user") Integer id){
        return sleepEntryService.addEntry(entry, id);
    }
}

