import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskDetailsService {

  constructor(private _http: Http) { }

  getDetails(x){
   return this._http.get('http://172.17.120.99:1122/get_task_details_id/' + x).map(res => res.json());
  }

}
