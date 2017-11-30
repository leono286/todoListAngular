import { TodoService } from './components/todo-list/services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { StatePipe } from './components/todo-list/pipes/state.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    StatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
