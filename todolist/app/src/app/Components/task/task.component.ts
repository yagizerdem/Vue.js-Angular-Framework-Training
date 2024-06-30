import { Component, Input, Output, EventEmitter } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task: String = '';
  @Output() delete: EventEmitter<String> = new EventEmitter();

  deleteTask(item: String) {
    this.delete.emit(item);
  }
}
