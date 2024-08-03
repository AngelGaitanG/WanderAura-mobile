import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';
import { IRegisterForm } from './interfaces/register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [IonInput, IonLabel, IonButton, CommonModule, FormsModule],
})
export class RegisterComponent {
@Output() goBack = new EventEmitter<Event>();

  goBackToParent():void {
    this.goBack.emit();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const loginForm: IRegisterForm = form.value;
      console.log(loginForm); 
    } 
  }

  constructor() { }


}
