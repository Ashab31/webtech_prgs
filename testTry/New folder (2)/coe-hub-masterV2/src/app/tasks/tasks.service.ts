import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable } from 'rxjs/Observable';
import { Tasks } from './tasks.interface';

@Injectable()
export class TasksService {
  constructor(private _http: Http) { }

 populateTask(x): Observable<Tasks[]>{
   return this._http.get('http://172.17.120.99:1122/get_tasks_id/' + x).map(res => res.json());
}

   addTasks(myObj): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    myObj.Reference_Id = Cookie.get('SOid');
    let body = JSON.stringify(myObj);
    return this._http.post('http://172.17.120.99:1122/insert_task', body, options).map(res => res.json());
    }

}
