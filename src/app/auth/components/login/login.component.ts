import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonItem, IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';
import { ILoginForm } from './interfaces/login.interface';
import { CommonModule } from '@angular/common';

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

  onSubmit(form: NgForm) {
    if (form.valid) {
      const loginForm: ILoginForm = form.value;
      console.log(loginForm); 
    } 
  }

  constructor() {}

}
