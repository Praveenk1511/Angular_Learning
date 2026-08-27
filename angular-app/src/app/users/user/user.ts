import { Component, input, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserType } from './user.model';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  user = input.required<UserType>();

  imagePath = computed(() => 'users/' + this.user().avatar);
}