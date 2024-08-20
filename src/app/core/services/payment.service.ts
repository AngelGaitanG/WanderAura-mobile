import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }


  simplePayment(tripId: string):Observable<object> {
    const body = {tripId: tripId};
    return this.http.post<object>(`${environment.wanderAuraApi}payments/simple`, body, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      }
    });
  }

}
