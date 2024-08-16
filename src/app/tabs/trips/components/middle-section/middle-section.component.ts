import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {IonButton, IonIcon} from '@ionic/angular/standalone'
import { TripResponse } from 'src/app/commons/interfaces/Trips.interface';

@Component({
  selector: 'app-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.scss'],
  standalone: true,
  imports: [IonButton, CommonModule, IonIcon]
})
export class MiddleSectionComponent {
@Input() trips: TripResponse[] = [];
  constructor() { }

  

}
