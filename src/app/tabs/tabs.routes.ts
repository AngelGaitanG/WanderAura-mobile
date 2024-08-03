import { Routes } from "@angular/router";

const TABS_ROUTES: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    }
]