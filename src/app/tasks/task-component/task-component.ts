import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task-model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common'; 
import { TasksService } from '../tasks-service';

@Component({
  selector: 'app-task-component',
  imports: [Card, DatePipe],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);
  
  onComplete() {
    this.tasksService.removeTask(this.task.id);
  }
}
