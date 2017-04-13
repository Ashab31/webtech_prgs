import { Component } from '@angular/core';
import { MTask } from './modal';
import { ITask } from './task';
import {TaskService } from './task.service';
import {DropdownService } from './task-dropdown.service';


@Component ({
    selector: 'task-list',
    templateUrl: './tasks.component.html',
    providers: [TaskService]
})


export class TasksComponent {
  search_button: string = 'Search';
  placeholder1: string = 'Search by Name';
  placeholder2: string = 'Search by Domain';
  errorMessage: string;
  listFilter: string;

  tasks: ITask[];
   answer: MTask[];

  constructor(private _taskService: TaskService) { }
  
  ngOnInit() {
    this._taskService.getTask().subscribe(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    },error=>this.errorMessage = <any>error);
  }
viewdetail(obj){
  this._taskService.getview(obj).subscribe(answer =>{
    this.answer= answer;
    console.log(this.answer);
  }); 

}

}


