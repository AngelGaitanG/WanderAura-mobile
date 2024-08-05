import { Component, Input, OnInit } from '@angular/core';
import { Slide } from 'src/app/commons/interfaces/Slide.interface';

@Component({
  selector: 'app-touch-slider',
  templateUrl: './touch-slider.component.html',
  styleUrls: ['./touch-slider.component.scss'],
  standalone: true,
  imports: []
})
export class TouchSliderComponent {

  @Input() images: Slide[] = [];
  constructor() { }



}
