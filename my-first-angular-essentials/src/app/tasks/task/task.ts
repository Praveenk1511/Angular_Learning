import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type TaskType } from './task.model';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';

@Component({
  imports: [Card, DatePipe],
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})
export class Task {
  @Input({required: true}) task!: TaskType;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
