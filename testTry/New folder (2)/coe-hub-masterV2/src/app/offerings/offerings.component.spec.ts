import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OfferingsService } from './offerings.service';
import { OfferingsComponent } from './offerings.component';

describe('OfferingsComponent', () => {
   it('should create offerings ',()=>{
     expect(this.addOffering).toBeTruthy;

   });

   it('should provide logout option', ()=>{
       expect(this.logOut).toHaveBeenCalled;
   })
});
