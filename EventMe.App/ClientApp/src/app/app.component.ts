import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { CommonModule } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  pageName!: string;

  constructor(private router: Router, private config: PrimeNGConfig) { 
  }
    

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.pageName = this.router.url;

    });
  }
  title = 'event-management-app';
}
