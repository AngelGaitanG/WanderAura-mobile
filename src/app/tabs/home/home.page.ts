import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as ionic from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ionic.IonHeader, ionic.IonToolbar, ionic.IonTitle, ionic.IonContent, ionic.IonCard, ionic.IonCardContent, ionic.IonCardHeader, ionic.IonCardSubtitle, ionic.IonCardTitle, CommonModule]
})
export class HomePage {
  cards = [
    { title: 'Card 1', subtitle: 'Card subtitle', content: 'I am card 1', img: '../../assets/backgrounds/flowers.jpg' },
    { title: 'Card 2', subtitle: 'Card subtitle', content: 'I am card 2', img: '../../assets/backgrounds/country.jpg' },
    { title: 'Card 3', subtitle: 'Card subtitle', content: 'I am card 3', img: '../../assets/backgrounds/forest.jpg' },
    { title: 'Card 4', subtitle: 'Card subtitle', content: 'I am card 4', img: '../../assets/backgrounds/autumn.jpg' }
  ];
  
  constructor() {}
}
