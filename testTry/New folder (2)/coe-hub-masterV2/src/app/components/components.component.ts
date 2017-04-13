import { AdalService } from 'ng2-adal/services/adal.service';
import { Component, OnInit } from '@angular/core';
import { Components } from './components.interface';
import { ComponentsService } from './components.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { ComponentsR } from './component-req.interface';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
  providers: [ComponentsService]
})
export class ComponentsComponent implements OnInit {
  url: string;
   errorMessage: string;
   Components: Components[];
   ComponentsR: ComponentsR[];
   name: string;

  constructor(private _compService: ComponentsService, private _adal: AdalService) {
    this.name = this._adal.userInfo.profile.name;
   }

  ngOnInit() {
     this._compService.getComponent().subscribe(Components => {
      this.name = this._adal.userInfo.profile.name;
     this.Components = Components; 
      console.log(this.Components); 
          },  error => this.errorMessage = <any>error);

          this._compService.getReqComponent().subscribe(ComponentsR => {
      this.name = this._adal.userInfo.profile.name;
     this.ComponentsR = ComponentsR; 
      console.log(this.ComponentsR); 
          },  error => this.errorMessage = <any>error);

  }
       CreateComponent(myObj:any){
    var d = new Date().toDateString();
    myObj.Created_By=this._adal.userInfo.profile.name;
    myObj.Created_Date=d;
    console.log(myObj);
    this._compService.CreateComponent(myObj);
  }


  AddComponent(myObj:any){
     var d = new Date().toDateString();
    myObj.Created_By=this._adal.userInfo.profile.name;
    myObj.Created_Date=d;
    console.log(myObj);
    this._compService.AddComponent(myObj);
    this.url = Cookie.get('comp-url');
  }
getId(x){
  Cookie.set('comp-token', x);
}

 public logOut(){
  this._adal.logOut();
}
}
