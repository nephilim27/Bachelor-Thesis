package com.example.final_exam_backend.services;

import com.example.final_exam_backend.models.EntryType;
import com.example.final_exam_backend.models.FoodEntry;
import com.example.final_exam_backend.models.Foods;
import com.example.final_exam_backend.repos.FoodsRepository;
import com.example.final_exam_backend.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodsService {

    @Autowired
    private FoodsRepository foodsRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Foods> getFoods() {
        return foodsRepository.findAll();
    }
    public Foods addFood(Foods entry) {
        Foods newFood = new Foods();
        newFood.setName(newFood.getName());
        newFood.setCalories(newFood.getCalories());

        return newFood;
    }

    public List<Foods> searchFoods(String query) {
        return foodsRepository.findByNameContainingIgnoreCase(query);
    }
}
