export class Project {
    constructor(name){
        this.id = Math.random() * 100;
        this.name = name;
        this.todos = [];
    }

    getTodos() {
        return this.todos;
    }

    setTodos(todo){
        this.todos.push(todo);
    }
}