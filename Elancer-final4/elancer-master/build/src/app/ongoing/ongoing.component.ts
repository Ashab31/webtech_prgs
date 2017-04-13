import { Component, OnInit } from '@angular/core';
import { ITask } from '../tasks/task';
import {TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing.component.html',
  styleUrls: ['./ongoing.component.css'],
   providers: [TaskService]
})
export class OngoingComponent implements OnInit {

  tasks: ITask[];

  constructor(private _taskService: TaskService) { }

   ngOnInit() {
    this._taskService.getTask().subscribe(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }

}
