import { Component, EventEmitter, Output } from '@angular/core';
import { type NewTask } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      titel: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  };

}
