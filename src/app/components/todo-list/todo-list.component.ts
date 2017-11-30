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
  currentFilter: any = null;

  constructor(private _todoService: TodoService) {
    this.todoList = _todoService.todoList;
  }

  ngOnInit() {
  }

  addTodo() {
    if (this.newTodoText.length > 0) {
      this._todoService.addTodo(this.newTodoText);
      this.newTodoText = '';
    }
  }

  removeTodo(index, indexInList?) {
    const i = indexInList ? indexInList : index;
    this._todoService.removeTodo(i);
  }

  changeTodoState(index, indexInList?) {
    const i = indexInList ? indexInList : index;
    this._todoService.changeTodoState(i);
    // this.changeFilterThroughService(this.currentFilter);
  }

  changeFilter(newFilter) {
    this.filterBy = newFilter;
  }

  clearCompleted() {
    this._todoService.clearCompleted();
    this.todoList = this._todoService.todoList;
  }

  // changeFilterThroughService(newFilter) {
  //   if (newFilter !== this.currentFilter) {
  //     this.currentFilter = newFilter;
  //   }
  //   this.todoList = this._todoService.filterTodoList(this.currentFilter);
  // }
}
