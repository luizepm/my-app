import { Injectable, signal, effect, Inject, PLATFORM_ID } from '@angular/core';
import { Theme } from '../models/theme.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public theme = signal<Theme>({ mode: 'dark', color: 'base' });
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.loadTheme();
    effect(() => {
      this.setTheme();
    });
  }

  private loadTheme() {
    if (this.isBrowser) {
      const theme = localStorage.getItem('theme');
      if (theme) {
        this.theme.set(JSON.parse(theme));
      }
    }
  }

  private setTheme() {
    if (this.isBrowser) {
      localStorage.setItem('theme', JSON.stringify(this.theme()));
      this.setThemeClass();
    }
  }

  public get isDark(): boolean {
    return this.theme().mode == 'dark';
  }

  private setThemeClass() {
    document.querySelector('html')!.className = this.theme().mode;
    document.querySelector('html')!.setAttribute('data-theme', this.theme().color);
  }
}
