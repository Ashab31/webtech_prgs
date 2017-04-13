import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class TaskdetailService {

  constructor(private _http:Http) { }

  //  getTask() {
     
  //      return this._http.get('http://172.17.120.119:1111/get-data-elancer')
  //       .map(res => res.json())
  //         .subscribe(data =>  console.log(data));
  //   }

}
