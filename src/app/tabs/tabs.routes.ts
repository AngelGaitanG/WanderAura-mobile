import { Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";

export const TABS_ROUTES: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
        canActivate: [AuthGuard],
    },
    {
        path: 'profile',
        loadComponent: () => import('./profile/profile.page').then((m) => m.ProfilePage),
        canActivate: [AuthGuard],

    },
    {
        path: 'trips',
        loadComponent: () => import('./trips/trips.page').then((m) => m.TripsPage),
        canActivate: [AuthGuard],

    },
    {
        path: 'trips/my-trips',
        loadComponent: () => import('./trips/pages/my-trips/my-trips.page').then((m) => m.MyTripsPage),
        loadChildren: () => import('./trips/trips.routes').then(m => m.TRIPS_ROUTES),
        canActivate: [AuthGuard],
    },
    {
        path: 'trips/:trip',
        loadComponent: () => import('./trips/pages/trip-detail/trip-detail.page').then((m) => m.TripDetailPage),
        canActivate: [AuthGuard],
    },
    {
        path: 'activities',
        loadComponent: () => import('./activities/activities.page').then((m) => m.ActivitiesPage),
        canActivate: [AuthGuard],

    },
    {
        path: 'settings',
        loadComponent: () => import('./settings/settings.page').then((m) => m.SettingsPage),
        canActivate: [AuthGuard],
    },
    {
        path: 'weather',
        loadComponent: () => import('./weather/weather.page').then((m) => m.WeatherPage),
        canActivate: [AuthGuard],

    },
    {
        path: 'posts',
        loadComponent: () => import('./posts/posts.page').then((m) => m.PostsPage),
        canActivate: [AuthGuard],
    },
    {
        path: 'help',
        loadComponent: () => import('./help/help.page').then((m) => m.HelpPage),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }
]