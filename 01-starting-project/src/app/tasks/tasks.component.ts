import { Component, Input } from '@angular/core';
import { TaskService } from './tasks.services';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
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
