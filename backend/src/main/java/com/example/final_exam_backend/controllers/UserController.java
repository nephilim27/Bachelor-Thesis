package com.example.final_exam_backend.controllers;

import com.example.final_exam_backend.models.User;
import com.example.final_exam_backend.repos.UserRepository;
import com.example.final_exam_backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.CacheControl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;

//    @GetMapping("/onboarding")
//    private List<User> getAllUsers(){
//        return userService.getAllUsers();
//    }
//    @GetMapping("/onboarding/{id}")
//    private User getUsers(@PathVariable("id") Integer id){
//        return userService.getUserById(id);
//    }
    @GetMapping("/onboarding")
    private List<User> getAllUsers() {
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

    @PutMapping("/onboarding/{id}")
    public User updateUser(@PathVariable Integer id, @RequestBody User updatedUser) {
        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();

            // Update the user information
            existingUser.setName(updatedUser.getName());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setAge(updatedUser.getAge());
            existingUser.setSex(updatedUser.getSex());
            existingUser.setHeight(updatedUser.getHeight());
            existingUser.setCurrentWeight(updatedUser.getCurrentWeight());
            existingUser.setActivityLevel(updatedUser.getActivityLevel());

            // Save the updated user to the database
            User savedUser = userRepository.save(existingUser);

            return savedUser;
        } else {
            throw new NoSuchElementException("User with ID " + id + " not found");
        }
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
