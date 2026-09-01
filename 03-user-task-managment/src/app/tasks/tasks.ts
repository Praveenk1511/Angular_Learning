import {
  Component,
  inject,
  input,
} from '@angular/core';
import { ResolveFn, RouterLink } from '@angular/router';

import { Task } from './task/task';
import { TasksService } from './tasks.service';
import { TaskType } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task, RouterLink],
})
export class Tasks {
  userTasks = input.required<TaskType[]>();
  userId = input.required<string>();
  order = input<'asc' | 'desc' | undefined>();
}

export const resolveUserTasks: ResolveFn<TaskType[]> = (
  activatedRouteSnapshot,
  routerState
) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(
      (task) => task.userId === activatedRouteSnapshot.paramMap.get('userId')
    );

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};
