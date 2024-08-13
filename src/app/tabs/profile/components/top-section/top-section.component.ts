import { Component, Input } from '@angular/core';
import { IonAvatar, IonButton } from '@ionic/angular/standalone';
import { ProfileUserResponse } from 'src/app/commons/interfaces/User.interface';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
  standalone: true,
  imports: [IonAvatar, IonButton],
})
export class TopSectionComponent {
@Input() info: any;
  onClick() {}


  constructor() { }



}
