export class Todo {
    constructor(title, description, dueDate, priority, id=Math.floor(Math.random() * 100)){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}