// /* tslint:disable:no-unused-variable */
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';
import {ResponseOptions} from '@angular/http';

import { TestBed, getTestBed, async, inject} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { RequestFormService } from './request-form.service';

   describe('RequestFormService', ()=>{
     beforeEach(()=>{
       TestBed.configureTestingModule({
         providers: [
           RequestFormService
         ]
       });
     });
      it('should convert the json objects to strings', ()=> {
        inject([RequestFormService], (requestformService) =>{
          expect(requestformService).toBeDefined();
          expect(requestformService.saveRequest('task-name')).toContain(JSON.stringify('task-name'));
        });
      });
   
     });

describe('RequestFormService', ()=>{
        let mockBackend: MockBackend;

        beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        RequestFormService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
       }
      ],
      imports: [
        HttpModule
      ]
    });
    mockBackend = getTestBed().get(MockBackend);
  }));

  it('should get data from database', done => {
    let requestformService: RequestFormService;

    getTestBed().compileComponents().then(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: [
                  {
                    taskname: 'cloud service',
                    description: 'Details of Project1',
                     domain: 'Web Tech',
                     vacancy: 2,
                     phase: 'Initial'
                  }]
              }
            )));
        });

        requestformService = getTestBed().get(RequestFormService);
        expect(RequestFormService).toBeDefined();

        requestformService.saveRequest('task').subscribe((tasks: any) => {
            expect(tasks.length).toBeDefined();
            expect(tasks.length).toEqual(1);
            expect(tasks[0].domain).toEqual('Web Tech');
            done();
        });
    });
   });

   it('should get data async',
    async(inject([RequestFormService], (requestformService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: [
                  {
                    
                   taskname: "Cloud Services",
                   description: "Details of project2",
                   domain: "Cloud",
                   vacancy: 7,
                   phase: "Development"
                  }]
              }
            )));
        });

      requestformService.saveRequest().subscribe(
        (data) => {
          expect(data.length).toBe(1);
          expect(data[0].phase).toBe('Development');
          expect(data[0].domain).toBe('Cloud');
      });
    })));

});