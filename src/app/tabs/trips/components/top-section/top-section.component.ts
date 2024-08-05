import { Component } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
  standalone: true, 
  imports: [IonButton],
})
export class TopSectionComponent {

  constructor() { }


}
