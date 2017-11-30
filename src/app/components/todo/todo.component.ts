import { Todo } from './../todo.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();
  @Output() onStateChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove() {
    this.onRemove.emit();
  }

  changeState() {
    this.onStateChange.emit();
  }

}
