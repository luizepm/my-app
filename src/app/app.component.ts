import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResponsiveHelperComponent, NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAppUI';

  constructor(public themeService: ThemeService) {}
}
