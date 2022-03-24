import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  TodoList : Todo[] = [];

  constructor(private service:DataserviceService)
  {
    service.getTodos().subscribe(res =>{
      this.TodoList = res;
    });
  }

  getTodo(userId:string) {
    this.service.getTodo(userId).subscribe(res => {
      this.TodoList = res;
    });
  }

  addTodo()
  {
    let dt:Todo={id:0, userId:10, title:'New Todo', completed: true}
    this.service.AddTodo(dt).subscribe(res => {
      dt.id = res['id'];
      this.TodoList.splice(0,0,dt);
    });
  }

  updateTodo(item:Todo, _title:string)
  {
    item.title = _title;
    this.service.updateTodo(item).subscribe(res => {
      console.log('Update');
    });
  }

  deleteTodo(item:Todo)
  {
    this.service.deleteTodo(item).subscribe(res => {
      let index = this.TodoList.indexOf(item);
      this.TodoList.splice(index,1);
    });
  }
}
