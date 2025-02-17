import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent
  },
  {
    path: 'components',
    component: LayoutComponent
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
