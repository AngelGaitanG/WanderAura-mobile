import { Routes } from "@angular/router";

export const TRIPS_ROUTES: Routes = [
    {
        path: 'my-trips',
        loadComponent: () => import('./pages/my-trips/my-trips.page').then((m) => m.MyTripsPage),
    },
   {
    path: 'my-trips/all-trips', 
    loadComponent: () => import('./pages/my-trips/components/all-trips/all-trips.component').then((m) => m.AllTripsComponent),
   },
   {
    path: 'my-trips/past-trips', 
    loadComponent: () => import('./pages/my-trips/components/past-trips/past-trips.component').then((m) => m.PastTripsComponent),
   },
   {
    path: 'my-trips/upcoming-trips',
    loadComponent: () => import('./pages/my-trips/components/upcoming-trips/upcoming-trips.component').then((m) => m.UpcomingTripsComponent),
   }
]