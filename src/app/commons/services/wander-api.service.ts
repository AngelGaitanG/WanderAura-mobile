import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, UserResponse } from '../interfaces/User.interface';


@Injectable({
  providedIn: 'root'
})
export class WanderApiService {

  constructor(private http: HttpClient) { }


  registerUser(user: IUser): void {
    this.http.post<UserResponse>('https://wanda-backend.onrender.com/auth/signup', user).subscribe({
      next: (res) => console.log('Usuario registrado correctamente:', res),
      error: (err) => console.error('Ocurrió un error durante el registro:', err),
      complete: () => console.log('Proceso de registro completado.'),
    });
  }
  



}
