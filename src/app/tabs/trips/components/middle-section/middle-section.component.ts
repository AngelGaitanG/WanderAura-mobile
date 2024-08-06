import { Component } from '@angular/core';
import {IonButton} from '@ionic/angular/standalone'

@Component({
  selector: 'app-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.scss'],
  standalone: true,
  imports: [IonButton]
})
export class MiddleSectionComponent {

  constructor() { }

}
