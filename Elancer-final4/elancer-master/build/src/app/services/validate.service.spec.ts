// /* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidateService } from './validate.service';

describe('ValidateService', () => {
       var res= new ValidateService();
            res.validateRequest('obj');
    it('should have all inputs defined', ()=> {
       
        expect(res).toBeDefined();
    });

    it('should contain some string value', ()=> {
        expect(res).toBeTruthy;
    });
       
    it('should be false if input is null', ()=> {
        res.validateRequest('');
    expect(res).toBeFalsy;
    })
    });