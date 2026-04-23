import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData, Task } from '../task-component/task-model';  
import { TasksService } from '../tasks-service';

@Component({
  selector: 'app-new-task-component',
  imports: [FormsModule],
  templateUrl: './new-task-component.html',
  styleUrl: './new-task-component.css',
})
export class NewTaskComponent {

  @Input({ required: true }) userId!: string;
  @Output() cancelTask = new EventEmitter<void>();

  private tasksService = inject(TasksService);

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = ''; 

  onCancel() {
    this.cancelTask.emit();
  }
  onSubmit() {  
    let newTask: NewTaskData = {
      title: this.enteredTitle,
      dueDate: this.enteredDueDate,
      summary: this.enteredSummary
    };
    this.tasksService.addTask(newTask, this.userId);
    this.cancelTask.emit();
  }
}
