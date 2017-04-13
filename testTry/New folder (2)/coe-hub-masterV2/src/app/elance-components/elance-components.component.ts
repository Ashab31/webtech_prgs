import { AdalService } from 'ng2-adal/services/adal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elance-components',
  templateUrl: './elance-components.component.html',
  styleUrls: ['./elance-components.component.css']
})
export class ElanceComponentsComponent implements OnInit {
   name: string;
  constructor( private _adal: AdalService) {
    this.name = this._adal.userInfo.profile.name;
   }

  ngOnInit() {
  }

}
