import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ICard } from './cards-interface';

@Injectable()
export class CardService {

  constructor(private _http: Http) { }

  getTask(): Observable<ICard[]>{
    console.log('123');
    return this._http.get(' https://glc-devtest-webtech-api.azurewebsites.net/elancer/get-data-elancer').map(res=> res.json());
  }

}
