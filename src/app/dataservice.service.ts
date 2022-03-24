import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Todo } from './Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  _url= 'https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>
{
    return this.http.get<Todo[]>(this._url+'todos')
}

getTodo(userId:string):Observable<Todo[]>
{
  const params = new HttpParams().set('userId', userId)
  return this.http.get<Todo[]>(this._url + 'todos', {params})
}

AddTodo(todo:Todo):Observable<Todo>
{
  return this.http.post<Todo>(this._url + 'todos/',JSON.stringify(todo));
}

updateTodo(todo:Todo):Observable<Todo>
{
  return this.http.put<Todo>(this._url + 'todos/' + todo.id, JSON.stringify(todo));
}

deleteTodo(todo:Todo):Observable<Todo>
{
  return this.http.delete<Todo>(this._url + 'todos/' + todo.id);
}
}
