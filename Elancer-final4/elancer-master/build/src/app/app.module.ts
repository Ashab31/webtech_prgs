import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import {RouterModule} from '@angular/router';
// import {FlashMessagesModule } from '@angular2-flash-messages';
// import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { CardsComponent } from './cards/cards.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { FooterComponent } from './footer/footer.component';

import {ValidateService } from './services/validate.service';


import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './profile/profile.component';
import { OngoingComponent } from './ongoing/ongoing.component';
import { CompletedComponent } from './completed/completed.component';

import {TaskFilterPipe} from './tasks/task-filter.pipe';
import {DropdownFilterPipe} from './tasks/task-dropdown-filter.pipe';
import {TaskService } from './tasks/task.service';
import {DropdownService } from './tasks/task-dropdown.service';
import { NotificationsComponent } from './notifications/notifications.component';
import {TaskdetailService } from './taskdetail/taskdetail.service';
import {RequestFormService } from './request-form/request-form.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponentComponent } from './search-component/search-component.component';


@NgModule({
  declarations: [
    AppComponent,
    RequestFormComponent,
    CardsComponent,
    TaskdetailComponent,
    FooterComponent,
    TasksComponent,
    ProfileComponent,
    OngoingComponent,
    CompletedComponent,
    TaskFilterPipe,
    DropdownFilterPipe,
    NotificationsComponent,
    NavbarComponent,
    SearchComponentComponent
   
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot([
      {path:'navbar', component: NavbarComponent},
      {path: 'requests', component: RequestFormComponent },
      {path: 'cards', component: CardsComponent },
      // {path: 'contribute', component: TasksComponent },
      {path: 'tasks', component: TasksComponent },
      {path: 'notifications', component: NotificationsComponent },
      {path: 'taskdetails', component: TaskdetailComponent },
      {path: 'profile', component: ProfileComponent},
      {path: 'ongoing-tasks', component: OngoingComponent},
      {path: 'completed-tasks', component: CompletedComponent},
      {path: 'taskdetail' , component: TaskdetailComponent},
      // {path: 'dashboard', component: DashboardComponent},
      {path: '', redirectTo: 'cards', pathMatch: 'full' },
      {path: '**', redirectTo: 'cards', pathMatch: 'full'  }
    ]),
      // FlashMessagesModule,
  ],  
      providers: [ValidateService,TaskService,DropdownService,TaskdetailService,RequestFormService],
      bootstrap: [AppComponent]
})
export class AppModule { }