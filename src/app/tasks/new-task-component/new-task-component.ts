import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task-component/task-model';  

@Component({
  selector: 'app-new-task-component',
  imports: [FormsModule],
  templateUrl: './new-task-component.html',
  styleUrl: './new-task-component.css',
})
export class NewTaskComponent {

  @Output() cancelTask = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskData>();

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
    this.addTask.emit(newTask);
  }
}
