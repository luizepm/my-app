/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavbarMobileSubmenuComponent } from './navbar-mobile-submenu.component';

describe('NavbarMobileSubmenuComponent', () => {
  let component: NavbarMobileSubmenuComponent;
  let fixture: ComponentFixture<NavbarMobileSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarMobileSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMobileSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
