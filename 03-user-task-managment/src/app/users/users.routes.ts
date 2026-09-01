import { Routes } from '@angular/router';

import {
  NewTask,
  canLeaveEditPage,
} from '../tasks/new-task/new-task';
import { Tasks, resolveUserTasks } from '../tasks/tasks';
import { TasksService } from '../tasks/tasks.service';

export const routes: Routes = [
  {
    path: '',
    providers: [TasksService],
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        component: Tasks,
        // loadComponent: () =>
        //   import('../tasks/tasks.component').then((mod) => mod.TasksComponent),
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTask,
        canDeactivate: [canLeaveEditPage],
      },
    ],
  },
];
