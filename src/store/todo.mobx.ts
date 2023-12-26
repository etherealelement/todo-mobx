import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import { ITodo } from './interfaces/todos.interface';

class Todo {
  todos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this, {
      todos: observable,
      addTodo: action,
    });
  }

  async addTodo(todo: ITodo) {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
          method: 'POST',
          body: JSON.stringify(todo),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const newTodo = await response.json();
      runInAction(() => {
        this.todos.push(newTodo);
      });
    } catch (error) {
      console.log(error);
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((item) => item.id !== id);
  }

  completeTodo(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  fetchTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        this.todos = [...this.todos, ...json];
      });
  }
}

export default new Todo();
