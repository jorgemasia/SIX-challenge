package com.six_test.server.service;

import com.six_test.server.model.Task;
import com.six_test.server.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repo;

    public TaskService(TaskRepository repo) {
        this.repo = repo;
    }
    
    public List<Task> list() {
        return repo.findAll();
    }

    public Task save(Task task) {        
        return repo.save(task);
    }
}
