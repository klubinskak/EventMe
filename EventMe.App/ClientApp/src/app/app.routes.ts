import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule) },
  { path: '**', component: NotFoundComponent }, 
];


@NgModule({
 imports: [
   RouterModule.forRoot(routes, {
     initialNavigation: 'enabledBlocking',
   }),
 ],
 exports: [RouterModule],
})
export class AppRoutingModule {}