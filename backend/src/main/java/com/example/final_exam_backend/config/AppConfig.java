package com.example.final_exam_backend.config;

import com.example.final_exam_backend.endpoints.Entry;
import com.example.final_exam_backend.endpoints.EntryRepository;
import com.example.final_exam_backend.endpoints.EntryType;
import com.example.final_exam_backend.endpoints.FoodEntry;
import com.example.final_exam_backend.onboarding.User;
import com.example.final_exam_backend.onboarding.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Configuration
public class AppConfig {
    @Bean
    public UserRepository userRepository() {
        return new UserRepository() {
            @Override
            public void flush() {

            }

            @Override
            public <S extends User> S saveAndFlush(S entity) {
                return null;
            }

            @Override
            public <S extends User> List<S> saveAllAndFlush(Iterable<S> entities) {
                return null;
            }

            @Override
            public void deleteAllInBatch(Iterable<User> entities) {

            }

            @Override
            public void deleteAllByIdInBatch(Iterable<Long> longs) {

            }

            @Override
            public void deleteAllInBatch() {

            }

            @Override
            public User getOne(Long aLong) {
                return null;
            }

            @Override
            public User getById(Long aLong) {
                return null;
            }

            @Override
            public User getReferenceById(Long aLong) {
                return null;
            }

            @Override
            public <S extends User> List<S> findAll(Example<S> example) {
                return null;
            }

            @Override
            public <S extends User> List<S> findAll(Example<S> example, Sort sort) {
                return null;
            }

            @Override
            public <S extends User> List<S> saveAll(Iterable<S> entities) {
                return null;
            }

            @Override
            public List<User> findAll() {
                return null;
            }

            @Override
            public List<User> findAllById(Iterable<Long> longs) {
                return null;
            }

            @Override
            public <S extends User> S save(S entity) {
                return null;
            }

            @Override
            public Optional<User> findById(Long aLong) {
                return Optional.empty();
            }

            @Override
            public boolean existsById(Long aLong) {
                return false;
            }

            @Override
            public long count() {
                return 0;
            }

            @Override
            public void deleteById(Long aLong) {

            }

            @Override
            public void delete(User entity) {

            }

            @Override
            public void deleteAllById(Iterable<? extends Long> longs) {

            }

            @Override
            public void deleteAll(Iterable<? extends User> entities) {

            }

            @Override
            public void deleteAll() {

            }

            @Override
            public List<User> findAll(Sort sort) {
                return null;
            }

            @Override
            public Page<User> findAll(Pageable pageable) {
                return null;
            }

            @Override
            public <S extends User> Optional<S> findOne(Example<S> example) {
                return Optional.empty();
            }

            @Override
            public <S extends User> Page<S> findAll(Example<S> example, Pageable pageable) {
                return null;
            }

            @Override
            public <S extends User> long count(Example<S> example) {
                return 0;
            }

            @Override
            public <S extends User> boolean exists(Example<S> example) {
                return false;
            }

            @Override
            public <S extends User, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
                return null;
            }
        };
    }

    @Bean
    public EntryRepository entryRepository(){
        return new EntryRepository() {
            @Override
            public List<Entry> findByUserAndType(User user, EntryType type) {
                return null;
            }

            @Override
            public List<FoodEntry> findByUserAndDate(User user, LocalDate date) {
                return null;
            }

            @Override
            public void flush() {

            }

            @Override
            public <S extends Entry> S saveAndFlush(S entity) {
                return null;
            }

            @Override
            public <S extends Entry> List<S> saveAllAndFlush(Iterable<S> entities) {
                return null;
            }

            @Override
            public void deleteAllInBatch(Iterable<Entry> entities) {

            }

            @Override
            public void deleteAllByIdInBatch(Iterable<Long> longs) {

            }

            @Override
            public void deleteAllInBatch() {

            }

            @Override
            public Entry getOne(Long aLong) {
                return null;
            }

            @Override
            public Entry getById(Long aLong) {
                return null;
            }

            @Override
            public Entry getReferenceById(Long aLong) {
                return null;
            }

            @Override
            public <S extends Entry> List<S> findAll(Example<S> example) {
                return null;
            }

            @Override
            public <S extends Entry> List<S> findAll(Example<S> example, Sort sort) {
                return null;
            }

            @Override
            public <S extends Entry> List<S> saveAll(Iterable<S> entities) {
                return null;
            }

            @Override
            public List<Entry> findAll() {
                return null;
            }

            @Override
            public List<Entry> findAllById(Iterable<Long> longs) {
                return null;
            }

            @Override
            public <S extends Entry> S save(S entity) {
                return null;
            }

            @Override
            public Optional<Entry> findById(Long aLong) {
                return Optional.empty();
            }

            @Override
            public boolean existsById(Long aLong) {
                return false;
            }

            @Override
            public long count() {
                return 0;
            }

            @Override
            public void deleteById(Long aLong) {

            }

            @Override
            public void delete(Entry entity) {

            }

            @Override
            public void deleteAllById(Iterable<? extends Long> longs) {

            }

            @Override
            public void deleteAll(Iterable<? extends Entry> entities) {

            }

            @Override
            public void deleteAll() {

            }

            @Override
            public List<Entry> findAll(Sort sort) {
                return null;
            }

            @Override
            public Page<Entry> findAll(Pageable pageable) {
                return null;
            }

            @Override
            public <S extends Entry> Optional<S> findOne(Example<S> example) {
                return Optional.empty();
            }

            @Override
            public <S extends Entry> Page<S> findAll(Example<S> example, Pageable pageable) {
                return null;
            }

            @Override
            public <S extends Entry> long count(Example<S> example) {
                return 0;
            }

            @Override
            public <S extends Entry> boolean exists(Example<S> example) {
                return false;
            }

            @Override
            public <S extends Entry, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
                return null;
            }
        };
    }
}

