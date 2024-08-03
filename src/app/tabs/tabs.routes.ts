import { Routes } from "@angular/router";

export const TABS_ROUTES: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    },
    {
        path: 'profile',
        loadComponent: () => import('./profile/profile.page').then((m) => m.ProfilePage),
    },
    {
        path: 'trips',
        loadComponent: () => import('./trips/trips.page').then((m) => m.TripsPage),
    },
    {
        path: 'activities',
        loadComponent: () => import('./activities/activities.page').then((m) => m.ActivitiesPage),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }
]