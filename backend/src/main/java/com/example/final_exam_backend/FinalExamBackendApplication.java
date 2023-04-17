package com.example.final_exam_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Collections;

@SpringBootApplication
@ComponentScan({"com.example.final_exam_backend.controllers", "com.example.final_exam_backend.services", "com.example.final_exam_backend.repos"})
@EnableJpaRepositories({"com.example.final_exam_backend.repos"})
@EntityScan({"com.example.final_exam_backend.models"})
public class FinalExamBackendApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(FinalExamBackendApplication.class);
		app.setDefaultProperties(Collections.singletonMap("server.port", "8080"));
		app.run(args);
	}
}
