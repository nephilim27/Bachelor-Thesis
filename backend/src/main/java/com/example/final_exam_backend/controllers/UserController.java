package com.example.final_exam_backend.controllers;

import com.example.final_exam_backend.models.User;
import com.example.final_exam_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/onboarding")
    private List<User> getAllUsers(){
        return userService.getAllUsers();
    }
    @GetMapping("/onboarding/{id}")
    private User getUsers(@PathVariable("id") Integer id){
        return userService.getUserById(id);
    }

    @DeleteMapping("/onboarding/{id}")
    private void deleteUser(@PathVariable("id") Integer id){
        userService.deleteUser(id);
    }

    @PostMapping("/onboarding")
    public User onboarding(@RequestBody User user) {
         // Validate the input
        if (!isValidUser(user)) {
            throw new IllegalArgumentException("Invalid user data");
        }

        // Save the user data to the database
        userService.saveUser(user);

        return user;
    }

    private boolean isValidUser(User user) {
        // Check required fields
        if (user.getName() == null || user.getName().isEmpty() ||
                user.getEmail() == null || user.getEmail().isEmpty() ||
                user.getAge() <= 0 || user.getSex() == null || user.getSex().isEmpty() ||
                user.getHeight() <= 0 || user.getCurrentWeight() <= 0 || user.getActivityLevel() == null ||
                user.getActivityLevel().isEmpty()) {
            return false;
        }
        return true;
    }

}
