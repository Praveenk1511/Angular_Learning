import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { type TaskType } from './task.model';
import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.html',
  styleUrl: './task.css',
  imports: [DatePipe, Card],
})
export class Task {
  task = input.required<TaskType>();
  private tasksService = inject(TasksService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  onComplete() {
    this.tasksService.removeTask(this.task().id);
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
      onSameUrlNavigation: 'reload',
      queryParamsHandling: 'preserve',
    });
  }
}
