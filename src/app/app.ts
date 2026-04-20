import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";
import { DUMMY_USERS } from '../../public/resources/dummy-users';   

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;

  onSelectedUser(userId: string) {
    console.log('Selected user ID:', userId);
  }
}
