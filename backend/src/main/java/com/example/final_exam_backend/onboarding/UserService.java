package com.example.final_exam_backend.onboarding;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public double calculateCalorieBudget(User user) {
        if (user.sex.equals("Male")){
            return 66.5 + (13.8 * user.currentWeight) + ((5 * user.height) / (6.8 * user.age));
        }
        else if (user.sex.equals("Female")){
            return 655.1 + (9.6 * user.currentWeight) + ((1.9 * user.height) / (4.7 * user.age));
        }

        return 0;
    }

    public double calculateWaterIntake(User user){
        return 0.35 * user.currentWeight;
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public User getUserById(Long id) {
        return (User) userRepository.findById(id).get();
    }

    public List<User> getAllUsers(){

        return userRepository.findAll();

    }

    public User updateUser(Long id, User user) {
        User existingUser = (User) userRepository.findById(id).get();

        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        existingUser.setAge(user.getAge());
        existingUser.setSex(user.getSex());
        existingUser.setHeight(user.getHeight());
        existingUser.setCurrentWeight(user.getCurrentWeight());
        existingUser.setActivityLevel(user.getActivityLevel());

        return (User) userRepository.save(existingUser);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}