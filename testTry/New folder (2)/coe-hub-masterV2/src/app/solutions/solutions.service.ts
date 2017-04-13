import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Sol } from './solutions.interface';
import { AdalService } from 'ng2-adal/services/adal.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class SolutionsService {

  constructor(private _http: Http, private _adal:AdalService) { }

////FUNCTION TO GET THE SOLUTIONS FROM DATABASE/////////////////////////////////
  getSolution(): Observable<Sol[]>{
    return this._http.get('https://glc-devtest-webtech-api.azurewebsites.net/elancer/get-data-solutions').map(res => res.json());
     }
////////////////FUNCTION ENDS HERE///////////////////////////////////////////

///////////////////////FUNCTION TO MAKE A GIT REPOSITORY///////////////////////////////////

  createTask(myObj){
     myObj.Git_Id = Cookie.get('offer-id');
    myObj.Git_Url = Cookie.get('offer-url');
  let headers = new Headers({ 'PRIVATE-TOKEN': Cookie.get('token') });
  headers.append('Access-Control-Allow-Origin','*');
  headers.append('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  headers.append('Access-Control-Allow-Headers', 'Content-type');
  let options = new RequestOptions({headers: headers});
   return this._http.post('http://glcgitlab.southindia.cloudapp.azure.com/api/v3/projects?name='+myObj.Solution_Name+'&issues_enabled=true',null,options)
   .map(res => res.json())
   .subscribe(
     res => {console.log(res);
         Cookie.set('offer-url', res.http_url_to_repo);
      Cookie.set('offer-id', res.id)},  err => console.log(err)
   );
   }

   ////////////////////FUNCTION ENDS HERE///////////////////////////////////

/////////////FUNCTION TO MAKE ENTRY IN DATABASE///////////////////////////////////
    addSolution(myObj){
        console.log(myObj);
        this.getToken();
        this.createTask(myObj);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(myObj);
    return this._http.post('https://glc-devtest-webtech-api.azurewebsites.net/elancer/insert_solution', body, options)
    .map((res) => res.json()).subscribe(
       data => {
       return true;
       },
       error => {
        // console.error("Error in saving");
         return Observable.throw(error);
       }
    );
    }
////////////////////////////FUNCTION ENDS HERE/////////////////////////////////////

/////////////////////FUNCTION TO FIND PRIVATE TOKEN//////////////////////////////////
  getToken(){
     this._http.get('https://glc-devtest-webtech-api.azurewebsites.net/elancer/get-data-users').map(res => res.json()).subscribe(
       res => {
         for(let r of res){
           if(r.Mid == this._adal.userInfo.userName.substring(0, 8))
                 {
                   Cookie.set('token', r.Private_Token);
                  }

         }
         console.log(Cookie.get('token'));
            }
     );
  }
}