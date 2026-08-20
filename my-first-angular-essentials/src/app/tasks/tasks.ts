import { Component, Input } from '@angular/core';

import { TasksService } from './tasks.service';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';

@Component({
  imports: [Task, NewTask],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
    @Input ({ required: true }) userId!: string;
    @Input({ required: true }) name!: string;
    isAddingTask = false;

    constructor(private tasksService: TasksService) {}

    get selectedUserTasks() {
      return this.tasksService.getUserTasks(this.userId);
    }

    onStartAddTask() {
      this.isAddingTask = true;
    }

    onCloseAddTask() {
      this.isAddingTask = false;
    }
}
