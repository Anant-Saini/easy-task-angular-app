import { Component, Input, EventEmitter, Output } from '@angular/core';
import { type User } from './user-model';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {

  @Input({ required: true}) user!: User;
  @Output() selectUser = new EventEmitter<User>();


  get imagePath() {
    return `images/users/${this.user.avatar}`;
  }
  

  onSelectUser() {
    this.selectUser.emit(this.user);
  }
}
