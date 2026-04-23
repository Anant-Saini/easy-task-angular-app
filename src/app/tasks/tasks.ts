import { Component, Input } from '@angular/core';
import { TaskComponent } from './task-component/task-component';
import { type NewTaskData, type Task } from './task-component/task-model';
import { DUMMY_TASKS } from '../../../public/resources/dummy-tasks';
import { type User } from '../user/user-model';
import { NewTaskComponent } from './new-task-component/new-task-component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) selectedUser!: User;
  isAddingTask: boolean = false;
  tasks: Task[] = DUMMY_TASKS;

  get selectedUserTasks(): Task[] {
    return this.tasks.filter((task) => task.userId === this.selectedUser?.id);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onNewTaskSubmit(newTask: NewTaskData) {
    let addedTask: Task = {
      id: crypto.randomUUID(),
      userId: this.selectedUser.id,
      ...newTask,
    };
    this.tasks.unshift(addedTask);
    this.isAddingTask = false;
  }
}
