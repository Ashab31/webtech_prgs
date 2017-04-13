import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Authenticate provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Authenticate {

  constructor(public http: Http) {
    console.log('Hello Authenticate Provider');
  }
      public get adalConfig(): any {
        return {
            tenant: '85c997b9-f494-46b3-a11d-772983cf6f11',
            clientId: '2844c082-9c50-4153-9427-0d487cf98171',

            //redirectUri: "http://localhost:4200",
            // postLogoutRedirectUri: window.location.origin + '/'

            redirectUri: "https://glc-devtest-webtech.azurewebsites.net/CoEHub/",
            postLogoutRedirectUri: window.location.origin + '/'

        };
    } 
}
