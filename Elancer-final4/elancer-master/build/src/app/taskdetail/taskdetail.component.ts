import { Component, OnInit } from '@angular/core';

import {TaskdetailService } from './taskdetail.service';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {

  constructor(private service : TaskdetailService) { }

  ngOnInit() {
   // this.service.getTask();
  }

}
