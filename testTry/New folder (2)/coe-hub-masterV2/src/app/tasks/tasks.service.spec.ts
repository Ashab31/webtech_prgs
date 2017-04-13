import { TestBed, inject } from '@angular/core/testing';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
   it('should add tasks in the gitLab',()=>{
       inject([TasksService], (taskservice) => {
      expect(taskservice.post('http://172.17.120.99:1122/insert_task')).toBeDefined;     
     }); 
 });

    it('should retrieve referenceId of user', ()=>{
    inject([TasksService], (taskservice) => {
      expect(taskservice.Reference_Id).toBeDefined;  
      });
    })
   
});
