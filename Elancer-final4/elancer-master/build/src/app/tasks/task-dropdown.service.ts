import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
// import {task} from './task.json';

import { ITask } from './task';

    
// @Injectable()
// export class TaskService{
//     private _taskUrl: string = "./tasks.json";


//     constructor(private _http: Http) {}

//     getTask(): Observable<ITask[]> {
//     console.log('hi');
//  //return  this._http.request('./tasks.json').map(response => response.json());

//         return this._http.get(this._taskUrl)
//             .map((response: Response) => <ITask[]> response.json())
//             .do(data => console.log('All: ' + JSON.stringify(data)))
//             .catch(this.handleError);
//     }

//     private handleError(error: Response) {
//         console.error(error);
//         return Observable.throw(error.json().error || 'Server error');
//     }
// }



@Injectable()
export class DropdownService {
  constructor(private _http: Http) { }
  getTask(): Observable<ITask[]>{
    console.log('123');
    return this._http.get(' https://glc-devtest-webtech-api.azurewebsites.net/elancer/get-data-elancer').map(res=> res.json());
  }

}

 
   
