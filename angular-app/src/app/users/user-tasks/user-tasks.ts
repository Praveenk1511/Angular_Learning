import { Component, OnInit, inject, input } from '@angular/core';
import { type UserType } from '../user/user.model';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-user-tasks',
  styleUrl: './user-tasks.css',
  templateUrl: './user-tasks.html',
})
export class UserTasks {
  userName = input.required<string>();
  message = input.required<string>();
  // private activatedRoute = inject(ActivatedRoute);

  // ngOnInit(): void {
  //   this.activatedRoute.data.subscribe({
  //     next: data => {
  //       console.log(data);
  //     }
  //   })
  // }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u: UserType) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  return resolveUserName(activatedRoute, routerState) + '\'s Tasks'
}
