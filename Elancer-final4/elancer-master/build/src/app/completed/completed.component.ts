import { Component, OnInit } from '@angular/core';
import { ITask } from '../tasks/task';
import {TaskService } from '../tasks/task.service';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
  providers: [TaskService]
})
export class CompletedComponent implements OnInit {

  tasks: ITask[];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.getTask().subscribe(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }
}
