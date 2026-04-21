import { Component, Input } from '@angular/core';

export interface Task {
  id: string;
  userId: string;
  title: string;
  dueDate: string;
  summary: string;
}

@Component({
  selector: 'app-task-component',
  imports: [],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
}
