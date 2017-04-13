import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {keyUpComponent} from './keyup.component';
import {LoopbackComponent} from './loop-back.component';
import {ClickMecomponent} from './click-me.component';
import {LittleTourComponent} from './little-tour.component';
import { AppComponent } from './app.component';
import {HeroFormComponent} from './hero-form.component';
// import { MycompComponent } from './mycomp/mycomp.component';
// import { TrialComponent } from './mycomp/trial/trial.component';
// import { TrialComponent } from './mycomp/trial.component';
// import { FilenmComponent } from './mycomp/filenm.component';

@NgModule({
  declarations: [
    AppComponent, ClickMecomponent, keyUpComponent, LittleTourComponent, LoopbackComponent, HeroFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
