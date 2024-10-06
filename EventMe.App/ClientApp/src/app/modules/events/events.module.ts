import { NgModule } from '@angular/core';
import { EventsRoutingModule } from './events-routing.module';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
  ],
  imports: [
    EventsRoutingModule,
    CommonModule,
  ],
})
export class EventsModule { }
