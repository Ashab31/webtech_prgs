import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.route';
import { routingcomponent } from './app.route';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ComponentsComponent } from './components/components.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TasksComponent } from './tasks/tasks.component';
import { APP_BASE_HREF,HashLocationStrategy,LocationStrategy } from '@angular/common';


import { Authenticate } from './providers/Authenticate';
import { AdalService } from 'ng2-adal/services/adal.service';
import { ComponentsDetailsComponent } from './components-details/components-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ElanceLandingComponent } from './elance-landing/elance-landing.component';
import { ElanceComponentsComponent } from './elance-components/elance-components.component';
import { ElanceTasksComponent } from './elance-tasks/elance-tasks.component';
import { ElanceProfileComponent } from './elance-profile/elance-profile.component';
import { ElanceSolutionsOfferingsComponent } from './elance-solutions-offerings/elance-solutions-offerings.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ComponentsComponent,
    OfferingsComponent,
    SolutionsComponent,
    TasksComponent,
    ComponentsDetailsComponent,
    TaskDetailsComponent,
    ProfileComponent,
    NotificationsComponent,
    ElanceLandingComponent,
    ElanceComponentsComponent,
    ElanceTasksComponent,
    ElanceProfileComponent,
    ElanceSolutionsOfferingsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  entryComponents: [
    AppComponent,
    LandingPageComponent,

    SolutionsComponent,
    OfferingsComponent
],
  providers: [AdalService, Authenticate],
  bootstrap: [AppComponent]
})
export class AppModule { }
