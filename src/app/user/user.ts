import { Component, computed, input, Input } from '@angular/core';




@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;

  get imagePath() {
    return `images/users/${this.avatar}`;
  }
  

  onSelectUser() {

 
  }
}
