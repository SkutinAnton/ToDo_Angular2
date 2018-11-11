import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {

  private url = 'http://localhost:3000';

  constructor(protected http: HttpClient) { }

  getTodo(): Observable<any> {
    return this.http.get(this.url);
  }

  createTodo(text): Observable<any> {
    const data = { text };
    return this.http.post(this.url, data);
  }

  deleteTodo(id: any): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
