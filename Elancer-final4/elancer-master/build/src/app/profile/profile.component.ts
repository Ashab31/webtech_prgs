import { Component, OnInit } from '@angular/core';
import { ITask } from '../tasks/task';
import {TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
   providers: [TaskService]
})
export class ProfileComponent implements OnInit {
 tasks: ITask[];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.getTask().subscribe(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }

}
