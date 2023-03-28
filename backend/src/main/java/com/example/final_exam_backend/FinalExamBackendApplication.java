package com.example.final_exam_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

import java.util.Collections;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@ComponentScan(basePackages = {"com.example.final_exam_backend.onboarding"})
@ComponentScan(basePackages = {"com.example.final_exam_backend.endpoints"})
@ComponentScan(basePackages = {"com.example.final_exam_backend.config"})
public class FinalExamBackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(FinalExamBackendApplication.class, args);
	}

}
