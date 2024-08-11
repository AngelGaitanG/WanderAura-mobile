import { Injectable } from '@angular/core';
import { LoginUserResponse } from '../../commons/interfaces/User.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey: string = 'authToken';

  constructor(
    private http: HttpClient
  ) { }

  loginUser(email: string, password: string): Observable<LoginUserResponse> {
    const user = { email, password };
    return this.http.post<LoginUserResponse>(`${environment.wanderAuraApi}auth/login`, user);
  }

  isAutenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
