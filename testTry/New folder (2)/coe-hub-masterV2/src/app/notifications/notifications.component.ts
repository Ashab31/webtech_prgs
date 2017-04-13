import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/services/adal.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

 name: String;
  constructor(private _adal: AdalService) {
     this.name = this._adal.userInfo.profile.name;
   }

  ngOnInit() {
  }
public logOut(){
  this._adal.logOut();
}
}
