import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TouchSliderComponent } from 'src/app/commons/components/slides/touch-slider/touch-slider.component';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TouchSliderComponent]
})
export class TripsPage {

  images = [
    {
      imgSrc: "assets/backgrounds/autumn.jpg", imgAlt: "Mountain"
    },
    {
      imgSrc: "assets/backgrounds/mountain.jpg", imgAlt: "Mountain"
    },
    {
      imgSrc: "assets/backgrounds/flowers.jpg", imgAlt: "Flowers"
    },
    {
      imgSrc: "assets/backgrounds/forest.jpg", imgAlt: "Forest"
    }
  ]

  constructor() { }

}
