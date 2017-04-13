import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ComponentsComponent } from './components/components.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { DetailsComponent } from './details/details.component';
import { ComponentsDetailsComponent } from './components-details/components-details.component';

import { ElanceLandingComponent } from './elance-landing/elance-landing.component';
import { ElanceComponentsComponent } from './elance-components/elance-components.component';
import { ElanceTasksComponent } from './elance-tasks/elance-tasks.component';
import { ElanceProfileComponent } from './elance-profile/elance-profile.component';
import { ElanceSolutionsOfferingsComponent } from './elance-solutions-offerings/elance-solutions-offerings.component';

const routes:Routes = [
    {path: '', component:LandingPageComponent},
    {path: 'app-landing-page', component: LandingPageComponent},
    {path: 'app-components', component: ComponentsComponent},
    {path: 'app-landing-page', component: LandingPageComponent},
    {path: 'app-offerings', component: OfferingsComponent},
    {path: 'app-solutions', component: SolutionsComponent},
    {path: 'app-tasks', component: TasksComponent},
    {path: 'app-profile', component: ProfileComponent},
    {path: 'app-task-details', component: TaskDetailsComponent},
    {path: 'app-details', component: DetailsComponent},
    {path: 'app-elance-landing', component: ElanceLandingComponent},
    {path: 'app-elance-components', component: ElanceComponentsComponent},
    {path: 'app-elance-tasks', component: ElanceTasksComponent},
    {path: 'app-elance-profile', component: ElanceProfileComponent},
    {path: 'app-elance-solutions-offerings', component: ElanceSolutionsOfferingsComponent},
    {path: 'app-components-details', component: ComponentsDetailsComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
export const routingcomponent = [ComponentsComponent, LandingPageComponent, OfferingsComponent, SolutionsComponent, DetailsComponent, TasksComponent, ProfileComponent, TaskDetailsComponent, ElanceLandingComponent, ElanceTasksComponent, ElanceComponentsComponent, ElanceProfileComponent, ElanceSolutionsOfferingsComponent, ComponentsDetailsComponent];