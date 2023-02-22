import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  public todo!: Todo;

  @Output()
  public change: EventEmitter<Todo> = new EventEmitter();

  @Output()
  public delete: EventEmitter<Todo> = new EventEmitter();

  public setClass(): string {
    var classes: string = 'todo-item-card';

    if (this.todo.completed) {
      classes += ' is-completed';
    }

    return classes;
  }

  public onChange(event: any): void {
    this.todo.completed = event.checked;

    this.change.emit(this.todo);
  }

  public onDelete(event: any): void {
    this.delete.emit(this.todo);
  }
}
