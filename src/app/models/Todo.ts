export class Todo {
    public id ?: number;
    public title: string;
    public completed: boolean;

    constructor (
        title: string = '',
        completed: boolean = false
    ) {
        this.title = title;
        this.completed = completed;
    }
}
