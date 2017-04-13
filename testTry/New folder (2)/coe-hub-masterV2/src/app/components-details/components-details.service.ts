import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ComponentsDetailsService {

  constructor(private _http: Http) { }

  getDetails(x): Observable<any> {
    return this._http.get('http://172.17.120.99:1122/get_addcomponent_details/' + x).map(res => res.json());
     }

     getDetailsReq(x): Observable<any> {
    return this._http.get('http://172.17.120.99:1122/get_reqcomponent_details/' + x).map(res => res.json());
     }
  }


