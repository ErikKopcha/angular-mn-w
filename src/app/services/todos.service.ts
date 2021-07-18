import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Todo {
  completed: boolean,
  title: string,
  id?: number
}

@Injectable({
 providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) { }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
  }

  getTodos() {
    let params = new HttpParams();
    params = params.append('_limit', '5');
    params = params.append('_custom', 'any');

    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      params
    })
  }

  deleteTodo(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  updateTodo(id: number, isCompleted: boolean) {
    return this.http.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed: isCompleted})
  }
}
