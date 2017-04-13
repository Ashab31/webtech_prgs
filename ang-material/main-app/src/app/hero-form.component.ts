import { Component} from '@angular/core';
import { Hero} from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: './hero-form.component.html'
}) 
export class HeroFormComponent{
    powers = ['Really samrt','super flexible','super hot','weather changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'chunk overstreet');
    
    submitted = false;

    onSubmit(){ this.submitted = true; }

    newHero() {
        this.model = new Hero(42, '','');
    }
}