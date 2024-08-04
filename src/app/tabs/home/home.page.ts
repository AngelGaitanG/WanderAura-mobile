import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { IonicModule, IonContent } from '@ionic/angular';
import { BottomSectionComponent } from './components/bottom-section/bottom-section.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, BottomSectionComponent]
})
export class HomePage {
  cards = [
    { title: 'Trips', img: '../../assets/backgrounds/flowers.jpg' },
    { title: 'Activities', img: '../../assets/backgrounds/country.jpg' },
    { title: 'Tours', img: '../../assets/backgrounds/forest.jpg' },
    { title: 'Tour Guides', img: '../../assets/backgrounds/autumn.jpg' }
  ];

  @ViewChild(IonContent) content!: IonContent;

  up() {
    this.content.scrollToTop(800);
    console.log("hiciste click");
  }
  constructor() {}
}
