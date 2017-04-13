import { Http,  Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestFormService {
  
  constructor(private http:Http) { }

  saveRequest(myObj){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(myObj);
    return this.http.post(' https://glc-devtest-webtech-api.azurewebsites.net/elancer/insert_Elancer', body, options).map((res) => res.json());
      

  }


}
