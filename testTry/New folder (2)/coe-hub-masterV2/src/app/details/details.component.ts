import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/services/adal.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [DetailsService]
})
export class DetailsComponent implements OnInit {
  name: string;
  constructor(private _adal: AdalService, private _det: DetailsService) {
    this.name = this._adal.userInfo.profile.name;
   }

  ngOnInit() {
      console.log(Cookie.get('SOid'));
    this._det.getDetailsO(Cookie.get('SOid')).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
    this._det.getDetailsS(Cookie.get('SOid')).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

public logOut(){
  this._adal.logOut();
}
}
