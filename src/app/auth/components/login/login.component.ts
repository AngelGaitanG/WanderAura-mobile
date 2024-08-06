import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonItem, IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';
import { ILoginForm } from './interfaces/login.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ FormsModule, IonItem, IonInput, IonLabel, IonButton, CommonModule ],
})
export class LoginComponent  {
  @Output() goBack = new EventEmitter<Event>();

  goBackToParent():void {
    this.goBack.emit();
  }

  router: Router = new Router();

  onSubmit(form: NgForm) {
    if (form.valid) {
      const loginForm: ILoginForm = form.value;
      this.router.navigate(['/tabs/home']);
      
    } 
  }

  constructor() {}

}
