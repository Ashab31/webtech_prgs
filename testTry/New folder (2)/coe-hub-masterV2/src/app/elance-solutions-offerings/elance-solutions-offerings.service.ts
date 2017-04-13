import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { ElanceOffer } from './elance-offerings.interface';
import { Sol } from './elance-solutions.interface';

@Injectable()
export class ElanceSolutionsOfferingsService {

  constructor(private _http: Http) { }

 getOffering(): Observable<ElanceOffer[]>{
    return this._http.get('https://glc-devtest-webtech-api.azurewebsites.net/elancer/get-data-offerings').map(res => res.json());      
     }

  getSolution(): Observable<Sol[]>{
    return this._http.get('https://glc-devtest-webtech-api.azurewebsites.net/elancer/get-data-solutions').map(res => res.json());      
     }
}
