import {Injectable} from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
// import {task} from './task.json';

import { ITask } from './task';
import { MTask } from './modal';

    
@Injectable()
export class TaskService {
  constructor(private _http: Http) { }
  getTask(): Observable<ITask[]>{
    console.log('123');
    return this._http.get(' https://glc-devtest-webtech-api.azurewebsites.net/elancer/get-data-elancer').map(res=> res.json());
  }

getview(obj): Observable<MTask[]>{
let headers = new Headers;
  headers.append( 'Content-Type','application/json' );
  headers.append( 'Content-Type', 'application/x-www-form-urlencoded' ) 
let url=' https://glc-devtest-webtech-api.azurewebsites.net/elancer/get_task/'+obj;
// console.log('abc');
return this._http.get(url,{headers: headers}).map(res=> res.json());
}
}

 
   
