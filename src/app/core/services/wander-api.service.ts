import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, ProfileUserResponse, RegisterUserResponse } from '../../commons/interfaces/User.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WanderApiService {

  constructor(private http: HttpClient) { }


  registerUser(user: IUser): Observable<RegisterUserResponse> {
    return this.http.post<RegisterUserResponse>(`${environment.wanderAuraApi}auth/signup`, user)
  }

  getProfile():Observable<ProfileUserResponse> {
    return this.http.get<ProfileUserResponse>(`${environment.wanderAuraApi}users/user-data`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      }
    });
  }

}
