package com.example.final_exam_backend.controllers;

import com.example.final_exam_backend.models.*;
import com.example.final_exam_backend.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;



@RestController
@RequestMapping("/api/entries")
public class EntryController {

    @Autowired
    private UserService userService;
    @Autowired
    private FoodEntryService foodEntryService;

    @Autowired
    private FoodsService foodsService;

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

    @GetMapping("/foodsOnGivenDay")
    public List<FoodEntry> getFoodEntriesOnGivenDay(@RequestParam(value = "userId") Integer userId) {
        LocalDate currentDate = LocalDate.now();

        return foodEntryService.getEntries(userId).stream()
                .filter(entry -> {
                    Date consumedAt = entry.getConsumedAt();
                    if (consumedAt == null) {
                        return false; // Skip entries with null consumedAt date
                    }
                    LocalDate entryDate = consumedAt.toInstant()
                            .atZone(ZoneId.systemDefault())
                            .toLocalDate();
                    return entryDate.isEqual(currentDate);
                })
                .collect(Collectors.toList());
    }

    @GetMapping("/foodsByType")
    public List<FoodEntry> getFoodEntriesByType(
            @RequestParam(value = "userId") Integer userId,
            @RequestParam(value = "type") String type
    ) {
        LocalDate currentDate = LocalDate.now();

        return foodEntryService.getEntries(userId).stream()
                .filter(entry -> {
                    Date consumedAt = entry.getConsumedAt();
                    String entryType = entry.getMealType();
                    if (consumedAt == null || entryType == null) {
                        return false;
                    }
                    LocalDate entryDate = consumedAt.toInstant()
                            .atZone(ZoneId.systemDefault())
                            .toLocalDate();
                    return entryDate.isEqual(currentDate) && entryType.equalsIgnoreCase(type);
                })
                .collect(Collectors.toList());
    }




    @PostMapping("/food")
    public FoodEntry addFoodEntry(@RequestBody FoodEntry entry, @RequestParam(value = "user") Integer id) {
        return foodEntryService.addEntry(entry, id);
    }

    @GetMapping("/foods")
    public List<Foods> getFoods(@RequestParam(name = "query", required = false) String query) {
        if (query != null && !query.isEmpty()) {
            // Perform the search based on the query
            List<Foods> searchResults = foodsService.searchFoods(query);
            return searchResults;
        } else {
            // Return all foods if no query is provided
            return foodsService.getFoods();
        }
    }

    @DeleteMapping("food/{entryId}")
    public void deleteFoodEntry(@PathVariable("entryId") Integer id) {
        foodEntryService.deleteEntry(id);
    }


    @PostMapping("/foods")
    public Foods addFood(@RequestBody Foods food) {
        return foodsService.addFood(food);
    }

    @GetMapping("/water")
    public List<WaterEntry> getWaterEntries(@RequestParam(value = "userId") Integer userId) {
        return waterEntryService.getEntries(userId);
    }

    @PostMapping("/water")
    public WaterEntry addWaterEntry(@RequestBody WaterEntry entry, @RequestParam(value = "user") Integer id) {
        return waterEntryService.addEntry(entry, id);
    }

    @GetMapping("/waterOnGivenDay")
    public List<WaterEntry> getWaterEntriesOnGivenDay(@RequestParam(value = "userId") Integer userId) {
        LocalDate currentDate = LocalDate.now();

        return waterEntryService.getEntries(userId).stream()
                .filter(entry -> {
                    Date consumedAt = entry.getConsumedAt();
                    if (consumedAt == null) {
                        return false; // Skip entries with null consumedAt date
                    }
                    LocalDate entryDate = consumedAt.toInstant()
                            .atZone(ZoneId.systemDefault())
                            .toLocalDate();
                    return entryDate.isEqual(currentDate);
                })
                .collect(Collectors.toList());
    }

    @GetMapping("/workout")
    public List<WorkoutEntry> getWorkoutEntries(@RequestParam(value = "userId") Integer userId) {
        return workoutEntryService.getEntries(userId);
    }

    @PostMapping("/workout")
    public WorkoutEntry addWorkoutEntry(@RequestBody WorkoutEntry entry, @RequestParam(value = "user") Integer id){
        return workoutEntryService.addEntry(entry, id);
    }

    @GetMapping("/workoutOnGivenDay")
    public List<WorkoutEntry> getWorkoutEntriesOnGivenDay(@RequestParam(value = "userId") Integer userId) {
        LocalDate currentDate = LocalDate.now();

        return workoutEntryService.getEntries(userId).stream()
                .filter(entry -> {
                    Date completedAt = entry.getCompletedAt();
                    if (completedAt == null) {
                        return false; // Skip entries with null consumedAt date
                    }
                    LocalDate entryDate = completedAt.toInstant()
                            .atZone(ZoneId.systemDefault())
                            .toLocalDate();
                    return entryDate.isEqual(currentDate);
                })
                .collect(Collectors.toList());
    }

    @GetMapping("/sleep")
    public List<SleepEntry> getSleepEntries(@RequestParam(value = "userId") Integer userId) {
        return sleepEntryService.getEntries(userId);
    }

    @PostMapping("/sleep")
    public SleepEntry addSleepEntry(@RequestBody SleepEntry entry, @RequestParam(value = "user") Integer id){
        return sleepEntryService.addEntry(entry, id);
    }

    @GetMapping("/sleepOnGivenDay")
    public List<SleepEntry> getSleepEntriesOnGivenDay(@RequestParam(value = "userId") Integer userId) {
        LocalDate currentDate = LocalDate.now();

        return sleepEntryService.getEntries(userId).stream()
                .filter(entry -> {
                    Date completedAt = entry.getCompletedAt();
                    if (completedAt == null) {
                        return false; // Skip entries with null consumedAt date
                    }
                    LocalDate entryDate = completedAt.toInstant()
                            .atZone(ZoneId.systemDefault())
                            .toLocalDate();
                    return entryDate.isEqual(currentDate);
                })
                .collect(Collectors.toList());
    }

}

