import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { inject } from '@angular/core';

import { NoTask } from './tasks/no-task/no-task';
import {
  UserTasks,
  resolveTitle,
  resolveUserName,
} from './users/user-tasks/user-tasks';
import { NotFound } from './not-found/not-found';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 1) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '',
    component: NoTask,
    // redirectTo: '/users/u1',
    // pathMatch: 'full'
    title: 'No task selected',
  },
  {
    path: 'users/:userId',
    component: UserTasks,
    loadChildren: () =>
      import('./users/users.routes').then((mod) => mod.routes),
    canMatch: [dummyCanMatch],
    data: {
      message: 'Hello!',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFound,
  },
];
