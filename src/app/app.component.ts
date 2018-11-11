import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todoList: any;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodo().subscribe(res => {
      this.todoList = res;
    });
  }

  addTodo(text) {
    this.todoService.createTodo(text).subscribe(res => {
      this.todoList = res;
    });
  }

  removeTodo(id) {
    this.todoService.deleteTodo(id).subscribe(res => {
      this.todoList = res;
    });
  }
}
