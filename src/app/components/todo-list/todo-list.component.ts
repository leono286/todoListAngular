import { TodoService } from './services/todo.service';
import { Todo } from './../todo.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[];
  newTodoText = '';
  filterBy: any = null;

  constructor(private _todoService: TodoService) {
    this.todoList = _todoService.todoList;
  }

  ngOnInit() {

  }

  addTodo() {
    if (this.newTodoText.length > 0) {
      console.log(this.newTodoText);
      this._todoService.addTodo(this.newTodoText);
      this.newTodoText = '';
    }
  }

  removeTodo(index) {
    this._todoService.removeTodo(index);
  }

  changeTodoState(index) {
    this._todoService.changeTodoState(index);
  }

  changeFilter(newFilter) {
    this.filterBy = newFilter;
  }
}
