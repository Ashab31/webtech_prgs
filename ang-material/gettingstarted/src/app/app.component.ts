import { Component } from '@angular/core';
import {FormComponent} from './form.component';
import {RegisterForm} from './registration.component';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
             <register-form></register-form> 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works getting!';
}
