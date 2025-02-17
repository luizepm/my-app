import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarMenuComponent } from "./navbar-menu/navbar-menu.component";
import { ProfileMenuComponent } from "./profile-menu/profile-menu.component";
import { NavbarMobileComponent } from "./navbar-mobile/navbar-mobile.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AngularSvgIconModule, NavbarMenuComponent, ProfileMenuComponent, NavbarMobileComponent, NavbarMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
