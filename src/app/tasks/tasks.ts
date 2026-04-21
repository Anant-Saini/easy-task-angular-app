import { Component, Input } from '@angular/core';
import { TaskComponent, Task } from './task-component/task-component';
import { DUMMY_TASKS } from '../../../public/resources/dummy-tasks';
import { User } from '../user/user';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) selectedUser!: User;
  tasks: Task[] = DUMMY_TASKS;

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.selectedUser?.id);
  }
}
