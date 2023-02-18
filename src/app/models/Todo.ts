export class Todo {
  public id?: number;
  public title: string;
  public completed: boolean;

  constructor(id: number = 0, title: string = '', completed: boolean = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
