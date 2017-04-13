import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
   selector: 'register-form',
   templateUrl: 'registration.component.html', 
})

export class RegisterForm{
    registerUser(form: NgForm){
        console.log(form.value);
        var jsonstring = JSON.stringify(form.value);
        console.log(jsonstring);
    }
}