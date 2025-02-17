import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import packageJson from '../../../../../package.json';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [NgClass, NgIf, AngularSvgIconModule, SidebarMenuComponent],
})
export class SidebarComponent implements OnInit {
  public appJson: any = packageJson;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
