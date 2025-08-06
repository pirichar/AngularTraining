import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TaskService } from './tasks.services';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent]
})


export class TasksComponent {

  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string
  isAddingTask = false;

  constructor(private taskServices: TaskService){
  }

  get SelectedUserTask(){
    return this.taskServices.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }


}
