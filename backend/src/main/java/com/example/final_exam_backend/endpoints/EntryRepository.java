package com.example.final_exam_backend.endpoints;

import com.example.final_exam_backend.onboarding.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.security.KeyStore;
import java.util.List;

@Repository
public interface EntryRepository extends JpaRepository<Entry, Long> {

    List<Entry> findByUserAndType(User user, EntryType type);
}

