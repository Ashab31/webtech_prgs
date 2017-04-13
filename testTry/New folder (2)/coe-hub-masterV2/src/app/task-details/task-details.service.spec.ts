import { TestBed, inject } from '@angular/core/testing';

import { TaskDetailsService } from './task-details.service';

describe('TaskDetailsService', () => {
    it('should get the details of the tasks',()=>{
       inject([TaskDetailsService], (taskdetail) =>{
            expect(taskdetail.get('http://172.17.120.99:1122/')).toBeTruthy;
       });
    });
});
