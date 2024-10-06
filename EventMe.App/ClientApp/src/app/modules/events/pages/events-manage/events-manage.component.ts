import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-events-manage',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    CommonModule,
    CardModule,
    ButtonModule,
    TabMenuModule,
  ],
  templateUrl: './events-manage.component.html',
  styleUrl: './events-manage.component.scss',
})
export class EventsManageComponent implements OnInit {
  fgComponent!: FormGroup;
  items: MenuItem[] | undefined;



  ngOnInit() {
    this.items = [
      { label: 'New event', icon: 'pi pi-plus', route: '/events/new' },
      { label: 'Events', icon: 'pi pi-list', route: '/events/listing' },
      { label: 'Calendar', icon: 'pi pi-calendar' },
      { label: 'Your events', icon: 'pi pi-heart' },
    ];
  }
}
