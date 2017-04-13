import { Component, OnInit } from '@angular/core';
import {  TaskService } from '../tasks/task.service';
import { ITask } from '../tasks/task';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [TaskService]
})

export class NavbarComponent {
  errorMessage: string;

   tasks: ITask[];

  constructor(private _taskService: TaskService) { }

 ngOnInit() {
    this._taskService.getTask().subscribe(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    },error=>this.errorMessage = <any>error);
  }


}
