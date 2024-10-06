import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IEvent } from '../../../../models/event';
import { EventService } from '../../../../services/event-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-events-listing',
  standalone: true,
  imports: [TableModule, CommonModule, FormsModule, InputTextModule, IconFieldModule, InputIconModule, ButtonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './events-listing.component.html',
  styleUrl: './events-listing.component.scss'
})
export class EventsListingComponent implements OnInit {
  public events!: IEvent[];
  selectedEvent!: IEvent;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.eventService.getEvents().subscribe((res: any) => {
      if (res) {
        this.events = res.data;
        console.log('res?', res)
      }
    })
  }

  // lang = localStorage.getItem("language")??'en';
  switch: boolean = true;


  onDelete(event: any) {

  }

  onFinish(event: any) {

  }

  buttonClick() {
    console.log('Hello')
  }
}
