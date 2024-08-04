import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from 'src/app/commons/components/carousel/carousel.component';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss'],
  imports: [CarouselComponent, CommonModule, IonButton, IonIcon ],
  standalone: true
})
export class BottomSectionComponent {
  carouselItems = [
    {
      image: '../../../../assets/backgrounds/flowers.jpg',
      title: 'Item 1',
      description: 'Description for item 1',
      link: '#'
    },
    {
      image: '../../../../assets/backgrounds/mountain.jpg',
      title: 'Item 2',
      description: 'Description for item 2',
      link: '#'
    },
    {
      image: '../../../../assets/backgrounds/country.jpg',
      title: 'Item 3',
      description: 'Description for item 3',
      link: '#'
    }
  ];

  constructor() { }

}
