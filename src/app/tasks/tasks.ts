import { Component, Input } from '@angular/core';
import { TaskComponent } from './task-component/task-component';
import { type NewTaskData, type Task } from './task-component/task-model';
import { type User } from '../user/user-model';
import { NewTaskComponent } from './new-task-component/new-task-component';
import { TasksService } from './tasks-service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
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
