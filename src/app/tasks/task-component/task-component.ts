import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task-model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-task-component',
  imports: [Card, DatePipe],
  templateUrl: './task-component.html',
  styleUrl: './task-component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();
  
  onComplete() {
    this.complete.emit(this.task.id);
  }
}
