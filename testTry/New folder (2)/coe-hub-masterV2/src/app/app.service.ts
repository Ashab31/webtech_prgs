import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { AdalService } from 'ng2-adal/services/adal.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AppService {

  constructor(private _http:Http, private _adal: AdalService) { }

  Populate()
  {
      console.log("check", this._adal.userInfo.userName.substring(0,8));
      let headers = new Headers();
      headers.append( 'Content-Type','application/json' );
      headers.append( 'Content-Type', 'application/x-www-form-urlencoded' );
      var url = 'https://glc-devtest-webtech-api.azurewebsites.net/elancer/insert_user/'+this._adal.userInfo.userName.substring(0,8);
      this._http.post(url,{headers: headers}).map(res => res.json()).subscribe(
        res => console.log(res)
      );
     var y = prompt("Please enter your Git Password");
         if(y == null)
          {
            this._adal.logOut();
          }
          this.gitGenerate(y);
  }

  gitCheck(){
       let headers = new Headers();
  headers.append( 'Content-Type','application/json' );
  headers.append( 'Content-Type', 'application/x-www-form-urlencoded' );
   return this._http.get('https://glc-devtest-webtech-api.azurewebsites.net/elancer/get-data-users',{headers: headers}).map(res => res.json()).subscribe(res => 
        {console.log(res);
          this.loop(res); 
      },

        err => console.log(err)
      );      
  }

  loop(res){
    console.log("check");
    let flag = 0;
    for(let x of res)
    {
      if(x.Mid == this._adal.userInfo.userName.substring(0,8))
      {
        flag = 1;
        if(x.Private_Token == null)
      {
       var y = prompt("Please enter your Git Password");
         if(y == null)
          {
            this._adal.logOut();
          }
          this.gitGenerate(y);
        }
      }
    }
    console.log(flag);
    if(flag == 0)
    {
      this.Populate();
    }
    }

  gitGenerate(y){
     return this._http.post('http://glcgitlab.southindia.cloudapp.azure.com/api/v3/session?login='+this._adal.userInfo.userName.substring(0,8)+'&password='+y,null).map(res => res.json()).subscribe(
       res => {console.log(res),
         this.updateUser(res);
         },
       err => console.log(err)
     );
  }

  updateUser(res){
    console.log(res);
    let name = encodeURIComponent(res.name).replace(/'/g,"%27").replace(/"/g,"%22").replace(/ /g,"%20");
     let headers = new Headers();
      headers.append( 'Content-Type','application/json' );
      headers.append( 'Content-Type', 'application/x-www-form-urlencoded' );
      var url = 'https://glc-devtest-webtech-api.azurewebsites.net/elancer/update_user/'+this._adal.userInfo.userName.substring(0,8)+'/'+res.id+'/'+name+'/'+res.private_token;
    this._http.post(url,{headers: headers}).map(res => res.json()).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

checkAccess(){
   return this._http.get('https://glc-devtest-webtech-api.azurewebsites.net/elancer/get_admin/'+this._adal.userInfo.userName.substring(0,8)).map(res => res.json());
}
}
