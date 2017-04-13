import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AdalService } from 'ng2-adal/services/adal.service';
import { Tasks } from './tasks.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]
})
export class TasksComponent implements OnInit {
  Tasks: Tasks[];
  name: string;
  constructor(private _tasks: TasksService, private _adal: AdalService) {
     this.name = this._adal.userInfo.profile.name;
   }

  ngOnInit() {
     let x = Cookie.get('SOid');
     this._tasks.populateTask(x).subscribe(Tasks => {this.Tasks = Tasks;}, err => console.log(err));
    //  Cookie.delete('SOid');
  }

CreateTask(myObj:any){
 var d = new Date().toDateString();
    myObj.Created_By = this._adal.userInfo.profile.name;
    myObj.Created_Date = d;
    this._tasks.addTasks(myObj).subscribe(res => {console.log("not working",res);
    this._tasks.populateTask(Cookie.get('SOid')).subscribe(Tasks =>
    {this.Tasks = Tasks; console.log("success")}, err => console.log(err)); },
    error => {console.log(error); this._tasks.populateTask(Cookie.get('SOid')).subscribe(Tasks =>
    {this.Tasks = Tasks; console.log("success")}, err => console.log(err)); }
    );
}

getId(x)
{
  Cookie.set('task-id', x);
}
 public logOut(){
  this._adal.logOut();
}
}
