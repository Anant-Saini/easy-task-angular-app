import { NgModule } from "@angular/core";
import { Tasks } from "./tasks";
import { TaskComponent } from "./task-component/task-component";
import { NewTaskComponent } from "./new-task-component/new-task-component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";


@NgModule({
  imports: [CommonModule, FormsModule, SharedModule],
  declarations: [Tasks, TaskComponent, NewTaskComponent],
  exports: [Tasks],
})
export class TasksModule {}