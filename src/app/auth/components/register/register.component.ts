import { Component, OnInit } from '@angular/core';
import { IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [IonInput, IonLabel, IonButton],
})
export class RegisterComponent {

  constructor() { }


}
