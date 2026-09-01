import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CanDeactivateFn, Router, RouterLink } from '@angular/router';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  userId = input.required<string>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  submitted = false;
  private tasksService = inject(TasksService);
  private router = inject(Router);

  onCancel() {
    this.router.navigate(['/users', this.userId(), 'tasks'], {
      replaceUrl: true,
    });
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );
    this.submitted = true;

    this.router.navigate(['/users', this.userId(), 'tasks'], {
      replaceUrl: true,
    });
  }
}

export const canLeaveEditPage: CanDeactivateFn<NewTask> = (component) => {
  if (component.submitted) {
    return true;
  }
  if (component.enteredTitle() || component.enteredDate() || component.enteredSummary()) {
    return window.confirm('Do you really want to leave? You will lose the entered data.')
  }
  return true;
}
