package com.example.final_exam_backend.endpoints;

import com.example.final_exam_backend.onboarding.User;
import com.example.final_exam_backend.onboarding.UserService;
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

//    @Autowired
//    private WaterEntryService waterEntryService;
//
//    @Autowired
//    private WorkoutEntryService workoutEntryService;
//
//    @Autowired
//    private SleepEntryService sleepEntryService;

    @GetMapping("/food")
    public List<FoodEntry> getFoodEntries(@RequestParam(value = "userId") Integer userId) {
        return foodEntryService.getEntries(userId);
    }

    @PostMapping("/food")
    public FoodEntry addFoodEntry(@RequestBody FoodEntry entry, @RequestParam(value = "user") Integer id) {
        return foodEntryService.addEntry(entry, id);
    }

//    @GetMapping("/water")
//    public List<WaterEntry> getWaterEntries(User user) {
//        return waterEntryService.getEntries(user);
//    }

//    @PostMapping("/water")
//    public WaterEntry addWaterEntry(@RequestBody WaterEntry entry, @RequestParam User id) {
//        entry.setUser(id);
//        return waterEntryService.addEntry(entry, );
//    }
//
//    @GetMapping("/workout")
//    public List<WorkoutEntry> getWorkoutEntries(User user) {
//        return workoutEntryService.getEntries(user);
//    }
//
//    @PostMapping("/workout")
//    public WorkoutEntry addWorkoutEntry(@RequestBody WorkoutEntry entry, User user){
//        return workoutEntryService.addEntry(entry, );
//
//    }@GetMapping("/sleep")
//    public List<SleepEntry> getSleepEntries(User user) {
//        return sleepEntryService.getEntries(user);
//    }
//
//    @PostMapping("/sleep")
//    public SleepEntry addSleepEntry(@RequestBody SleepEntry entry,User user){
//        return sleepEntryService.addEntry(entry, );
//    }
}

