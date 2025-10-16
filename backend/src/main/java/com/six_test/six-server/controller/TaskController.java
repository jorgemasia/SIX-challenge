package com.six_test.server.controller;

import com.six_test.server.model.Task;
import com.six_test.server.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping
    public List<Task> list() {
        return service.list();
    }

    @PostMapping
    public Task post(@RequestBody Task task) {        
        return service.save(task);
    }
}
