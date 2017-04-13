import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/services/adal.service';

@Component({
  selector: 'app-elance-landing',
  templateUrl: './elance-landing.component.html',
  styleUrls: ['./elance-landing.component.css']
})
export class ElanceLandingComponent implements OnInit {
name: string;
  constructor(private _adal: AdalService) { 
     this.name = this._adal.userInfo.profile.name;  
  }

  ngOnInit() {
  }

}
