import { Component, OnInit } from '@angular/core';
import { ElanceOffer } from './elance-offerings.interface';
import { Sol } from './elance-solutions.interface';
import { ElanceSolutionsOfferingsService } from './elance-solutions-offerings.service';
import { AdalService } from 'ng2-adal/services/adal.service';

@Component({
  selector: 'app-elance-solutions-offerings',
  templateUrl: './elance-solutions-offerings.component.html',
  styleUrls: ['./elance-solutions-offerings.component.css'],
  providers: [ElanceSolutionsOfferingsService]
})
export class ElanceSolutionsOfferingsComponent implements OnInit {
   name: string;
   errorMessage: string;
   Offerings: ElanceOffer[];
   Solutions: Sol[];
  constructor(private _offerService: ElanceSolutionsOfferingsService, private _adal: AdalService) { 
    this.name = this._adal.userInfo.profile.name;
  }

   ngOnInit() {
     this._offerService.getOffering().subscribe(Offerings => {
     this.Offerings = Offerings; 
          },  error => this.errorMessage = <any>error);
     this._offerService.getSolution().subscribe(Solutions => {
     this.Solutions = Solutions; 
          },  error => this.errorMessage = <any>error);

  }
}
