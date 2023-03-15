package com.example.final_exam_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class FinalExamBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinalExamBackendApplication.class, args);
	}

}
