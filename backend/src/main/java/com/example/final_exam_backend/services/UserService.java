package com.example.final_exam_backend.services;

import com.example.final_exam_backend.models.User;
import com.example.final_exam_backend.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;


    public void saveUser(User user) {
        userRepository.save(user);
    }

    public User getUserById(Integer id) {
        return (User) userRepository.findById(id).get();
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }


    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }

}