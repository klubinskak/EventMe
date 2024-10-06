import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    AvatarModule,
    PanelMenuModule,
    CommonModule,
    MenuModule,
    SpeedDialModule,
    ToastModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit{
  menuItems: MenuItem[] | undefined;
  items: MenuItem[] | undefined;

  routeName!: string;

  constructor(private messageService: MessageService, private router: Router ) {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        link: '/',
      },
      {
        label: 'New',
        icon: 'pi pi-plus',
        link: '/events',
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
        link: '/',
      },
      {
        label: 'Events',
        icon: 'pi pi-calendar',
        link: '/calendar',
      },
      {
        label: 'Events',
        icon: 'pi pi-database',
        link: '/events',
      },
    ];

    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Add',
            detail: 'Data Added',
          });
        },
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update',
            detail: 'Data Updated',
          });
        },
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Delete',
            detail: 'Data Deleted',
          });
        },
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload'],
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io',
      },
    ];
  }
  ngOnInit(): void {
    //this.routeName = this.router.url;
    this.router.events.subscribe((url:any) => {
      if(url.url){
        this.routeName = url.url;
      }
    });
    
  }
}
