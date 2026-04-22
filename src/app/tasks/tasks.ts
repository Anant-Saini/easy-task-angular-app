import { Component, Input } from '@angular/core';
import { TaskComponent } from './task-component/task-component';
import { type Task } from './task-component/task-model';
import { DUMMY_TASKS } from '../../../public/resources/dummy-tasks';
import { type User } from '../user/user-model';

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

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
