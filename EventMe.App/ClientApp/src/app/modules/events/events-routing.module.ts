import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListingComponent } from './pages/events-listing/events-listing.component';
import { EventsManageComponent } from './pages/events-manage/events-manage.component';
import { EventComponent } from './pages/event/event.component';

const routes: Routes = [
  // { path: '', component: EventsListingComponent },
  // { path: 'manage', component: EventManageComponent },
  // { path: 'manage/:id', component: EventManageComponent },
  {
    path: '',
    component: EventsManageComponent,
    children: [
      { path: 'new', component: EventComponent },
      { path: 'listing', component: EventsListingComponent },
      // { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default tab
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
