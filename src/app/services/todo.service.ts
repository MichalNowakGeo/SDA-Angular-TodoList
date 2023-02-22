import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTodos(): Observable<Todo[]>
  {
    var getResult: Observable<Todo[]>;

    getResult = this.httpClient.get<Todo[]>(this.apiUrl, HTTP_OPTIONS);

    return getResult;
  }

  public updateTodo(todo: Todo): Observable<Todo>
  {
    var
      updateResult: Observable<Todo>,
      url: string;

    url = `${this.apiUrl}/${todo.id}`;

    updateResult = this.httpClient.put<Todo>(url, todo, HTTP_OPTIONS);

    return updateResult;
  }

  public deleteTodo(todo: Todo): Observable<Todo>
  {
    var
      deleteResult: Observable<Todo>,
      url: string;

    url = `${this.apiUrl}/${todo.id}`;

    deleteResult = this.httpClient.delete<Todo>(url, HTTP_OPTIONS);

    return deleteResult;
  }

  public createTodo(todo: Todo): Observable<Todo>
  {
    var createResult: Observable<Todo>;

    createResult = this.httpClient.post<Todo>(this.apiUrl, todo, HTTP_OPTIONS);

    return createResult;
  }
}
