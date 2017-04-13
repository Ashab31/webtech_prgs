import {Component} from '@angular/core';

// @Component({
//     selector: 'key-up1',
//     template: `
//          <input (keyup)= "onKey($event)">
//          <p>{{values}}</p>
//     `
// })

// export class keyUpComponent{
//  values= '';
//  onKey(event:KeyboardEvent){
//      this.values += (<HTMLInputElement>event.target).value + '|';
//  }   
// }

@Component({
    selector:'key-up',
    template: `
    <input #box (keyup.enter)= "onEnter(box.value)">
    <p>{{value}}</p>
    `
})

export class keyUpComponent{
    value='';
    onEnter(value:string){
        this.value = value;
    }
}