import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  public title!: string;

  @Output()
  public submit: EventEmitter<string> = new EventEmitter();

  public onSubmit(): void {
    this.submit.emit(this.title);
  }
}
