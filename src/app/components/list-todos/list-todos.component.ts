import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  public todos: Todo[] = [];

  constructor(
    public todoService: TodoService,
  ) {}

  public onTodoChange(todo: Todo): void {
    var observable: Observable<Todo>;

    observable = this.todoService.updateTodo(todo);

    observable.subscribe(
      (returnedTodo: Todo) => {
        this.todos.forEach(
          (todoElement: Todo) => {
            if (todoElement.id === returnedTodo.id) {
              todoElement = returnedTodo;
              console.log(returnedTodo);
            }
          }
        )
      }
    );
  }

  public onTodoDelete(todo: Todo): void {
    var observable: Observable<Todo>;

    observable = this.todoService.deleteTodo(todo);

    observable.subscribe(
      () => {
        this.todos = this.todos.filter(
          (todoItem: Todo) => {
            return todoItem.id !== todo.id;
          }
        );
      }
    );
  }

  public onTodoCreate(title: string): void {
    var
      todo: Todo,
      observable: Observable<Todo>;


    todo = new Todo(title, false);

    observable = this.todoService.createTodo(todo);

    observable.subscribe(
      (todo: Todo) => {
        this.todos.push(todo);
      }
    );
  }

  public ngOnInit(): void {
    var observable: Observable<Todo[]>;

    observable = this.todoService.getTodos();

    observable.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
      }
    );
  }
}
