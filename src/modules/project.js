export class Project {
    constructor(name){
        this.id = Math.random() * 100;
        this.name = name;
        this.todos = [];
    }

    get getTodos() {
        return this.todos;
    }

    set setTodos(todo){
        this.todos.push(todo);
    }
}