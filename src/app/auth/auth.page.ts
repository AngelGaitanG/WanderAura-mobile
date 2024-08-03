import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { ButtonActivated } from './enum/button-activated.enum';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, LoginComponent]
})
export class AuthPage {

  buttonActivated: string;

  constructor() {
    this.buttonActivated = ButtonActivated.Login;
  }

  login() {
    this.buttonActivated = ButtonActivated.Login;
  }


  register(){
    this.buttonActivated = ButtonActivated.Register;
  }

}
