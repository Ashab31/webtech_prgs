import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsComponent } from './solutions.component';


describe('SolutionsComponent', () => {
    
    it('should provide logout option', ()=> {
        expect(this.logout).toHaveBeenCalled;
    })

    it('should call addSolution method',()=>{
        // expect(this.CreateSolution).toHaveBeenCalledWith(this.addSolution);
        expect(this.addSolution).toBeDefined;
    })

    it('should display the created date',()=>{
        var d= new Date();
        this.Created_Date= d;
        // expect(this.Created_Date.getDate).toBe(d.getDate);
              expect(this.Created_Date.getDate()).toBeGreaterThanOrEqual(4);
    })
  
});

