import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError, delay} from "rxjs/operators";
import {Todo, TodosService} from "../services/todos.service";
import {throwError} from "rxjs";

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {
  form: FormGroup;
  todos: Todo[] = [];
  loading: boolean = false;
  deleteTrigger: boolean = false;
  doneTrigger: boolean = false;
  error: string = '';

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.form = new FormGroup({
      todoTitle: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      )
    });

    this.getTodos();
  }

  sort(arr) {
    return arr.sort((a, b) => {
      return a.completed - b.completed
    });
  }

  addTodo() {
    if (this.form.valid) {
      this.loading = true;

      const newTodo: Todo = {
        title: this.form.value.todoTitle,
        completed: false
      };

      this.todosService.addTodo(newTodo)
        .subscribe(todo => {
          this.todos.unshift(todo);
          this.form.reset();
          this.loading = false;
        },
          error => {
            this.error = error.message;
          },
          () => { } // stream end
        )
    }
  }

  getTodos() {
    this.loading = true;

    this.todosService.getTodos()
      .pipe(
        delay(1500),
        catchError(error => {
            return throwError(error);
          }
        )
      )
      .subscribe(response => {
        this.todos = this.sort(response);
        this.loading = false;
      },
        error => {
          this.error = error.message;
        },
        () => { } // stream end
      )
  }

  deleteTodo(id: number) {
    this.deleteTrigger = true;

    this.todosService.deleteTodo(id)
      .pipe(
        catchError(error => {
            return throwError(error);
          }
        )
      )
      .subscribe(response => {
        this.todos = this.todos.filter(el => el.id !== id);
        this.deleteTrigger = false;
      },
        error => {
          this.error = error.message;
        },
        () => { } // stream end
        )
  }

  updateTodo(id: number, isCompleted) {
    this.doneTrigger = true;

    this.todosService.updateTodo(id, isCompleted)
      .pipe(
        catchError(error => {
            return throwError(error);
          }
        )
      )
      .subscribe(response => {
        this.todos.find(t => t.id === id).completed = isCompleted;
        this.todos = this.sort(this.todos);
        this.doneTrigger = false;
      },
        error => {
          this.error = error.message;
        },
        () => { } // stream end
      )
  }
}
