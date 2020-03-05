import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Todo } from "./interfaces/todo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  baseUrl: string = "http://localhost:3200/todo-list";
  todoArr: Todo[] = [];
  constructor(private http: HttpClient) {}

  getTable(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  addTask(task: Todo): Observable<any> {
    return this.http.post(this.baseUrl, task);
  }
}
