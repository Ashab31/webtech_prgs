import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsService } from './components.service';
import { AdalService } from 'ng2-adal/services/adal.service';
import { ComponentsComponent } from './components.component';


describe('ComponentsComponent', () => {
  //    beforeEach(() => {
  //  var com= new  ComponentsComponent(null, null);
  //    });
  beforeEach(()=>{
    var com: ComponentsComponent;
  })

      it('should have been created ', () => {
        expect(this.AddComponent).toHaveBeenCalled;
         });

      it('should have been called', ()=>{
          expect(this.CreateComponent).toHaveBeenCalled;
      });

      it("should create task with today's date",()=> {
        var d= new Date();
        this.Created_Date= d;
        expect(this.Created_Date.getDate).toBe(d.getDate);
      });

      it("Creator's name should not be null", ()=>{
        //this.name= this._adal.userInfo.profile.name;
        this.Created_By= this.name;

         expect(this.Created_By).not.toBeNull;
      });

 });
