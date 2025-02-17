import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SubMenuItem } from '../../../../models/menu.model';

@Component({
  selector: 'app-navbar-submenu',
  templateUrl: './navbar-submenu.component.html',
  styleUrls: ['./navbar-submenu.component.css'],
  imports: [NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, NgIf, AngularSvgIconModule]
})
export class NavbarSubmenuComponent {
  @Input() public submenu = <SubMenuItem[]>{};
  @ViewChild('submenuRef') submenuRef: ElementRef<HTMLDivElement> | undefined;

  constructor() { }

  ngAfterViewInit() {
    /**
     * check if component is out of the screen
     */
    if (this.submenuRef) {
      const submenu = this.submenuRef.nativeElement.getBoundingClientRect();
      const bounding = document.body.getBoundingClientRect();

      if (submenu.right > bounding.right) {
        const childrenElement = this.submenuRef.nativeElement.parentNode as HTMLElement;
        if (childrenElement) {
          childrenElement.style.left = '-100%';
        }
      }
    }
  }
}
