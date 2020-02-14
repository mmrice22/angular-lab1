import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  // properties
  todoArr: Todo[] = [
    { task: "wake up", completed: true },
    { task: "chill with Isak", completed: false },
    { task: "feed the zoo", completed: true },
    { task: "go to class", completed: true },
    { task: "walk the dog", completed: false },
    { task: "climb some walls", completed: false }
  ];

  constructor() {}

  ngOnInit(): void {}
}
