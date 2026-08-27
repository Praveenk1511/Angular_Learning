import { Component, inject } from '@angular/core';

import { User } from './user/user';
import { UsersService } from './users.service';

@Component({
  imports: [User],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users {
    private usersService = inject(UsersService);
    users = this.usersService.users;
}
