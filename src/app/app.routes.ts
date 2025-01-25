import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'climate',
    pathMatch: 'full'
  },
  {
    path: 'climate',
    loadComponent: () => import('./modules/climate/search-climate/search-climate.component')
  },
  {
    path: 'favorites',
    loadComponent: () => import('./modules/favorites/city-climate-favorites/city-climate-favorites.component')
  },
  {
    path: 'history',
    loadComponent: () => import('./modules/history/climate-history/climate-history.component')
  },
  {
    path: '**',
    redirectTo: 'climate'
  }
];
