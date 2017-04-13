import { Component, OnInit } from '@angular/core';
import { ITask } from '../tasks/task';
import { MTask } from '../tasks/modal';
import {TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css'],
  providers: [TaskService]
})
export class ContributeComponent implements OnInit {
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
