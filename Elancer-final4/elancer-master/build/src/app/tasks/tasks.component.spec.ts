// /* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {TaskService } from './task.service';
import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
     beforeEach(()=>{
         var comp= new TasksComponent(null);
     });

     it('should call the function', ()=>{
     //this.comp.viewdetail(null);
     expect(this.viewdetail).toHaveBeenCalled;
     });

     
 });

