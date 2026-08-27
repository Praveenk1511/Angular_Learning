import {
  Component,
  inject,
  input,
} from '@angular/core';
import { NewTask } from './new-task/new-task';
import { ResolveFn, RouterLink } from '@angular/router';
import { TasksService } from './tasks.service';
import { Task } from './task/task';
import { type TaskType } from './task/task.model';


@Component({
  imports: [Task, NewTask, RouterLink],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
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