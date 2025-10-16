import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css' 
})
export class App {
  protected readonly title = signal('six-test');
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasksComponent],
  template: `<app-tasks></app-tasks>`
})
export class AppComponent {}
