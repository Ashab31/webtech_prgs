import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/services/adal.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:string;
  mid:String;
  email:String;
  constructor(private adalService:AdalService) {
     this.name = this.adalService.userInfo.profile.name;
     this.mid = this.adalService.userInfo.userName.substring(0,8);
     this.email = this.adalService.userInfo.userName;
   }

  ngOnInit() {
  }

} 