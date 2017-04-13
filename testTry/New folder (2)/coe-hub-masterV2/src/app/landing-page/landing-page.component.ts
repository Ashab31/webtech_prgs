import { AdalService } from 'ng2-adal/services/adal.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  name:string;
  constructor(private adalService: AdalService) {
    this.name = this.adalService.userInfo.profile.name;
  }

  ngOnInit() {
  }

  public logOut(){
  this.adalService.logOut();
}

}
