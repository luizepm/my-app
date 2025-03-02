import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BottomNavbarComponent } from "./bottom-navbar/bottom-navbar.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [SidebarComponent, NavbarComponent, RouterOutlet, FooterComponent, BottomNavbarComponent],
})
export class LayoutComponent implements OnInit {
  private mainContent: HTMLElement | null = null;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.mainContent) {
          this.mainContent!.scrollTop = 0;
        }
      }
    });
  }

  ngOnInit(): void {
    debugger;
    if (document != null)
      this.mainContent = document.getElementById('main-content');
  }
}
