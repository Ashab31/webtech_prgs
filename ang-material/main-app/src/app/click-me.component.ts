import { Component } from '@angular/core';

@Component({
    selector:'click-me',
    template:`
    <button (click)="onclickme();">Click me</button>
    {{clickMessage}}
    `
})
export class ClickMecomponent{
    clickMessage='';

    onclickme(){
        this.clickMessage='yor are my hero';
    }
}