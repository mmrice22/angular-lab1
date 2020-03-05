import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";
import { TodoService } from "../todo.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  // properties
  todoArr: Todo[] = [];

  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.getTable();
  }

  getTable() {
    this.service.getTable().subscribe(response => {
      // console.log(response);
      this.todoArr = response;
    });
  }

  deleteTask(id: number) {
    this.service.deleteTask(id).subscribe(response => {
      this.getTable();
    });
  }

  addTask(form: NgForm) {
    let newTodo = {
      task: form.value.task,
      completed: false
    };
    this.service.addTask(newTodo).subscribe(response => {
      this.getTable();
    });
  }
}
