import { Component, OnInit } from '@angular/core';
import { Offer } from './offerings.interface';
import { OfferingsService } from './offerings.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AdalService } from 'ng2-adal/services/adal.service';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.css'],
  providers: [OfferingsService]
})
export class OfferingsComponent implements OnInit {
   name:string;
   errorMessage: string;
   Offerings: Offer[];

  constructor(private _offerService: OfferingsService, private _adal: AdalService) { 
     this.name = this._adal.userInfo.profile.name;
  }

  ngOnInit() {
     this._offerService.getOffering().subscribe(Offerings => {
     this.Offerings = Offerings; 
      console.log(this.Offerings); 
          },  error => this.errorMessage = <any>error);

  }

  CreateOffering(myObj:any){
    var d = new Date().toDateString();
    myObj.Created_By=this._adal.userInfo.profile.name;
    myObj.Created_Date=d;
    this._offerService.addOffering(myObj);
  }
    public logOut(){
       this._adal.logOut();
}

getId(x){
  Cookie.set('SOid', x);
}

}
