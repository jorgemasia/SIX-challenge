import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class TasksComponent {
  taskForm!: FormGroup;
  tasks: Task[] = [];
  

  constructor(private fb: FormBuilder, 
              private taskService: TaskService) {
    
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.error('Error cargando tareas', err)
    });
  }

  addTask() {
    if (this.taskForm.valid) {      
      
      
      this.taskService.addTask(this.taskForm.value as Task).subscribe({
        next: (task) => {
          this.tasks.push(task);
          
        },
        error: (err) => console.error('Error añadiendo tarea', err)
      });

      this.taskForm.reset();
    } else {
      this.taskForm.markAllAsTouched();
    }
  }
}
