import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './header/header';
import { Users } from './users/users';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, Users, RouterOutlet],
})
export class App { }
