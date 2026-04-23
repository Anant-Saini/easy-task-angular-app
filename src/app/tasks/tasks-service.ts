import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../../../public/resources/dummy-tasks";
import { NewTaskData, Task } from "./task-component/task-model";

@Injectable({
    providedIn: 'root'
})
 export class TasksService {
    private tasks: Task[] = DUMMY_TASKS;

    getTasksForUser(userId: string): Task[] {
        return this.tasks.filter((task) => task.userId === userId);
    }
    addTask(newTask: NewTaskData, userId: string) {
        let addedTask: Task = {
          id: crypto.randomUUID(),
          userId: userId,
          ...newTask,
        };
        this.tasks = [addedTask, ...this.tasks];
    }
    removeTask(taskId: string) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }

}