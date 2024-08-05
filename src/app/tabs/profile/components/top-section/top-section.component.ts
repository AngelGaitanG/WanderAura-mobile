import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
  standalone: true,
  imports: [IonAvatar, IonButton],
})
export class TopSectionComponent {

  onClick() {}


  constructor() { }



}
