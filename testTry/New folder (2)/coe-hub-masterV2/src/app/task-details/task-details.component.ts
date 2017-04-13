import { Component, OnInit } from '@angular/core';
import { TaskDetailsService } from './task-details.service';
import { AdalService } from 'ng2-adal/services/adal.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  providers: [TaskDetailsService]
})
export class TaskDetailsComponent implements OnInit {
  name: string;
  constructor(private adalService: AdalService, private _tSer: TaskDetailsService) { 
    this.name = this.adalService.userInfo.profile.name;
  }

  ngOnInit() {
    console.log(Cookie.get('task-id'));
    this._tSer.getDetails(Cookie.get('task-id')).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
