import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../../public/resources/dummy-users';
import { type User } from './user/user-model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  selectedUser?: User;

  onSelectedUser(user: User) {
    this.selectedUser = user;
  }
}
