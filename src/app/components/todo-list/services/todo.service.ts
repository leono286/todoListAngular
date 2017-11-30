import { Todo } from './../../todo.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todoList: Todo[];

  constructor() {
    this.todoList = [];
  }

  addTodo(text) {
    const newTodo = {
      text: text,
      completed: false
    };
    this.todoList.push(newTodo);
  }

  removeTodo(index) {
    this.todoList.splice(index, 1);
  }

  changeTodoState(index) {
    this.todoList[index].completed = !this.todoList[index].completed;
  }
}
