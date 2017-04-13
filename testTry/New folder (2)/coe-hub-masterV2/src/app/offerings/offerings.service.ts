import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Offer } from './offerings.interface';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class OfferingsService {

  constructor(private _http: Http) { }

  getOffering(): Observable<Offer[]>{
    return this._http.get('https://glc-devtest-webtech-api.azurewebsites.net/elancer/get-data-offerings').map(res => res.json());
     }


addOffering(myObj){
  this.createTask(myObj);
  myObj.Git_Id = Cookie.get('offer-id');
  myObj.Git_Url = Cookie.get('offer-url');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(myObj);
    return this._http.post('https://glc-devtest-webtech-api.azurewebsites.net/elancer/insert_offerings', body, options)
    .map((res) => res.json()).subscribe(
       data => {
        return true;
       },
       error => {
         console.error("Error in saving");
         return Observable.throw(error);
       }
    );
    }

 createTask(myObj){
    let headers = new Headers({ 'PRIVATE-TOKEN': Cookie.get('token') });
  headers.append('Access-Control-Allow-Origin','*');
  headers.append('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  headers.append('Access-Control-Allow-Headers', 'Content-type');
  let options = new RequestOptions({headers: headers});
   return this._http.post('http://glcgitlab.southindia.cloudapp.azure.com/api/v3/projects?name='+myObj.Offering_Name+'&issues_enabled=true',null,options)
   .map(res => res.json())
   .subscribe(
     res => {console.log(res);
       Cookie.set('offer-url', res.http_url_to_repo);
      Cookie.set('offer-id', res.id)}, 
     
     err => console.log(err)
   );
   }
  

}
