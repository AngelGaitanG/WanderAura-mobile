import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonInput, IonLabel, IonButton, IonSpinner, IonItem, IonIcon } from '@ionic/angular/standalone';
import { IRegisterForm } from './interfaces/register.interface';
import { WanderApiService } from 'src/app/commons/services/wander-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [IonInput, IonLabel, IonButton, CommonModule, FormsModule, IonSpinner, IonItem, IonIcon],
})
export class RegisterComponent {
@Output() goBack = new EventEmitter<Event>();
userRegistered = false;
showSuccessIcon = false;
constructor(
  private wanderApiService: WanderApiService
) { }

  goBackToParent():void {
    this.goBack.emit();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const loginForm: IRegisterForm = form.value;
      this.wanderApiService.registerUser(loginForm);
      this.userRegistered = true;
      setTimeout(() => {
        this.showSuccessIcon = true;
      }, 1500);
    } 
  }




}
