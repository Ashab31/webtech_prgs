import { Component, OnInit } from '@angular/core';
import { ComponentsDetailsService } from './components-details.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AdalService } from 'ng2-adal/services/adal.service';

@Component({
  selector: 'app-components-details',
  templateUrl: './components-details.component.html',
  styleUrls: ['./components-details.component.css'],
  providers: [ComponentsDetailsService]
})
export class ComponentsDetailsComponent implements OnInit {
  name: String;
  constructor(private _serVice: ComponentsDetailsService, private _adal: AdalService) {
     this.name = this._adal.userInfo.profile.name;
   }

  ngOnInit() {
    let x = Cookie.get('comp-token');
    this._serVice.getDetails(x).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
     this._serVice.getDetailsReq(x).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }


 public logOut(){
  this._adal.logOut();
}
}
