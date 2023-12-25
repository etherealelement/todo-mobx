import { makeAutoObservable } from "mobx";
import { ITodo } from "./interfaces/todos.interface";

class Todo {
  todos:ITodo[] =[

  ];

  constructor () {
    makeAutoObservable(this)
  }


  addTodo(todo: ITodo) {
    this.todos.push(todo)
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(item => item.id !== id)
  }

  completeTodo(id: number) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }

  fetchTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        this.todos = [...this.todos, ...json]
      })
  }
}

export default new Todo();