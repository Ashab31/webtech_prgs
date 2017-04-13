import { OfferingsComponent } from './offerings/offerings.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TasksComponent } from './tasks/tasks.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { Authenticate } from './providers/Authenticate';
import { Component } from '@angular/core';
import { AdalService } from 'ng2-adal/services/adal.service';
import { AppService } from './app.service';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

@Component({
  selector: 'app-adal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  adminId;
  flag:boolean=false;

  public rootPage;
   public AuthenticationContext;
  constructor(public adalService:AdalService, private Authentication: Authenticate, private _aSer: AppService, private _http: Http) {
    
    this.adalService.init(this.Authentication.adalConfig);
    console.log(this.adalService);
   this.adalService.handleWindowCallback();
    this.adalService.getUser();
    if(this.adalService.userInfo.isAuthenticated==true)
    {
       var x = this.adalService.userInfo.userName.substring(0,8);
      //console.log(this.adalService.getCachedToken(this.adalService.config.loginResource));
      this._aSer.gitCheck();
    }
    else
    {
      this.adalService.login();
     }
  
    this._aSer.checkAccess().subscribe(res => console.log("hello " +res),
    err => console.log(err));

    //  let mid = this.adalService.userInfo.userName.substring(0,8);
    //   if(mid == "M1039151"){
    //   this.router.navigate(["/app-elance-landing"]); 
    // } 

}
public ngOnInit(){
 let flag=this.adalService.userInfo.isAuthenticated;
}
}
