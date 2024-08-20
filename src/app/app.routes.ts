import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage),
    loadChildren: () => import('./tabs/tabs.routes').then(m => m.TABS_ROUTES)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
