import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './Components/task/task.component';
import { DomElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  inputValue: String = '';
  task: String[] = [];
  addTask() {
    if (this.inputValue.trim().length == 0) return;
    this.task.push(this.inputValue);
    this.inputValue = '';
  }
  onRemove(item: String) {
    var deepCopy: String[] = JSON.parse(JSON.stringify(this.task));
    const i = deepCopy.findIndex((el) => el == item);
    deepCopy.splice(i, 1);
    this.task = deepCopy;
  }
}
