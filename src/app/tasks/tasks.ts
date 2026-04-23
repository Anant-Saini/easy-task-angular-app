import { Component, Input } from '@angular/core';
import { type User } from '../user/user-model';
import { TasksService } from './tasks-service';
import { Task } from './task-component/task-model';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) selectedUser!: User;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks(): Task[] {
    return this.tasksService.getTasksForUser(this.selectedUser.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

}
