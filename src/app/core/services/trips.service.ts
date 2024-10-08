import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripResponse } from 'src/app/commons/interfaces/Trips.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }

  getTrips():Observable<TripResponse[]> {
    return this.http.get<TripResponse[]>(`${environment.wanderAuraApi}trips`);
  }

  getTrip(id: string):Observable<TripResponse> {
    return this.http.get<TripResponse>(`${environment.wanderAuraApi}trips/${id}`, );
  }

  getUserTrips():Observable<any> {
    return this.http.get<any>(`${environment.wanderAuraApi}bookings/my-trips`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    });
  }
}
