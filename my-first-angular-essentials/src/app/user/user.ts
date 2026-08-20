import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type UserType } from './user.model';
import { Card } from "../shared/card/card";


@Component({
  imports: [Card],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',  
})
export class User {
  @Input({ required: true }) user!: UserType;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
