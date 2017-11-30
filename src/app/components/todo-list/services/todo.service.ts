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

  // filterTodoList(filterBy) {
  //   if (filterBy !== null) {
  //     return this.todoList.filter((todo) => {
  //       return todo.completed === filterBy;
  //     });
  //   } else {
  //     return this.todoList;
  //   }
  // }
}
