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

  getTrip(id: number):Observable<TripResponse> {
    return this.http.get<TripResponse>(`${environment.wanderAuraApi}trips/${id}`);
  }

}
