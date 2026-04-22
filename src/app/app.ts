import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from '../../public/resources/dummy-users';
import { Tasks } from './tasks/tasks';
import { type User } from './user/user-model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, Tasks],
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
