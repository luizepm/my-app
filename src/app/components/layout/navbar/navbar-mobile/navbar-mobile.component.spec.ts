/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavbarMobileComponent } from './navbar-mobile.component';

describe('NavbarMobileComponent', () => {
  let component: NavbarMobileComponent;
  let fixture: ComponentFixture<NavbarMobileComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
