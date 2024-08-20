import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonItem, IonInput, IonLabel, IonButton, IonSpinner } from '@ionic/angular/standalone';
import { ILoginForm } from './interfaces/login.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginUserResponse } from 'src/app/commons/interfaces/User.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ FormsModule, IonItem, IonInput, IonLabel, IonButton, CommonModule, IonSpinner ],
})
export class LoginComponent  {
  @Output() goBack = new EventEmitter<Event>();
  @Output() register = new EventEmitter<Event>();
  invalidCredentials = false;
  isLoading = false;
  constructor(
    private authService: AuthService, private router: Router
  ) {}

  goBackToParent():void {
    this.goBack.emit();
  }

  goToRegister():void {
    this.register.emit();
  }
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      const loginForm: ILoginForm = form.value;
      this.isLoading = true;
      this.authService.loginUser(loginForm.email, loginForm.password).subscribe({
        next: (res: LoginUserResponse) => {
          if (res.success) {
            localStorage.setItem('authToken', res.access_token)
            console.log('Token:', res.access_token);
            this.router.navigate(['/tabs/home']);
            this.isLoading = false;
          } else {
            console.error('Autenticación fallida');
          }
        },
        error: (err) => {
          if(err){
            this.invalidCredentials = true;
          }
        }
      });
      
    } 
  }


}
