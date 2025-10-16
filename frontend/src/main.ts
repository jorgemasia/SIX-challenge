import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ReactiveFormsModule } from '@angular/forms';
import { App } from './app/app';
import { TasksComponent } from './app/tasks/tasks';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

