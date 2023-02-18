import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  public todos: Todo[] = [
    new Todo(1, 'zadanie1', true),
    new Todo(2, 'zadanie2', true),
    new Todo(3, 'zadanie3', false),
    new Todo(4, 'zadanie4', true),
    new Todo(5, 'zadanie5', false),
  ];

  constructor(private httpClient: HttpClient) {}

  public getTodos(): Observable<Todo[]> {
    var getResult: Observable<Todo[]>;

    getResult = this.httpClient.get<Todo[]>(this.apiUrl);

    return getResult;
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    var updateResult: Observable<Todo>, url: string;
    url = `${this.apiUrl}/${todo.id}`;
    updateResult = this.httpClient.put<Todo>(url, todo, HTTP_OPTIONS);

    return updateResult;
  }

  public deleteTodo(todo: Todo): Observable<Todo> {
    var deleteResult: Observable<Todo>, url: string;

    url = `${this.apiUrl}/${todo.id}`;
    deleteResult = this.httpClient.delete<Todo>(url, HTTP_OPTIONS);
    return deleteResult;
  }

  /*public onTodoChange(todo: Todo): void {
      console.log(todo)
    }


  public updateTodo(actualTodo: Todo) {
    for (let index = 0; index < this.todos.length; index++) {
      if (this.todos[index].id === actualTodo.id) {
        this.todos[index] = actualTodo;
        return;
      }
    }

    console.log('#######################################');
    this.todos.forEach((element) => console.log(element));
  }*/
}
