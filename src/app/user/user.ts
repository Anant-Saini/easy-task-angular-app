import { Component, Input, EventEmitter, Output } from '@angular/core';
import { type User } from './user-model';



@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {

  @Input({ required: true}) user!: User;
  @Input({ required: true}) selected!: boolean;
  @Output() selectUser = new EventEmitter<User>();


  get imagePath() {
    return `images/users/${this.user.avatar}`;
  }
  

  onSelectUser() {
    this.selectUser.emit(this.user);
  }
}
