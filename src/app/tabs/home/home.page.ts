import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule]
})
export class HomePage {
  cards = [
    { title: 'Trips', img: '../../assets/backgrounds/flowers.jpg' },
    { title: 'Activities', img: '../../assets/backgrounds/country.jpg' },
    { title: 'Tours', img: '../../assets/backgrounds/forest.jpg' },
    { title: 'Tour Guides', img: '../../assets/backgrounds/autumn.jpg' }
  ];
  constructor() {}
}
