// import { TestBed, inject } from '@angular/core/testing';

// import { SolutionsService } from './solutions.service';

// describe('SolutionsService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [SolutionsService]
//     });
//   });

//   it('should ...', inject([SolutionsService], (service: SolutionsService) => {
//     expect(service).toBeTruthy();
//   }));
// });
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';
import {ResponseOptions} from '@angular/http';

import { TestBed, getTestBed, async, inject} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
 import { SolutionsService } from './solutions.service';

   describe('SolutionsService', ()=>{
     beforeEach(()=>{
       TestBed.configureTestingModule({
         providers: [
           SolutionsService
         ]
       });
     });
      it('should map Http response to javascript objects', ()=> {
        inject([SolutionsService], (solutionsService) =>{
           expect(solutionsService).toBeDefined();
          expect(solutionsService.createTask('task-name')).toContain(JSON.stringify('task-name'));
        });
      });

      // it('should return git id and url',()=>{
      //     this.createTask.get("offer-id");
      //     expect(this.createTask).toBeDefined;
      // });

      it('should get solution from gitlab',()=>{
         inject([SolutionsService], (solutionsService) =>{
               expect(solutionsService.get('https://glc-devtest-webtech-api.azurewebsites.net/elancer/get-data-solutions')).toBeTruthy;
         });
      })

       it('should save solution into gitlab',()=>{
         inject([SolutionsService], (solutionsService) =>{
               expect(solutionsService.post('https://glc-devtest-webtech-api.azurewebsites.net/elancer/get-data-solutions')).toBeTruthy;
         });
      })
   
     });

