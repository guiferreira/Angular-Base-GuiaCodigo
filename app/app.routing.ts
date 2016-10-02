import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeViewComponent }   from './components/views/home/home-view.component';
import { ExemploViewComponent }   from './components/views/exemplo/exemplo-view.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeViewComponent
  },
  {
    path: 'exemplo',
    component: ExemploViewComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
