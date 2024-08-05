import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Slide } from 'src/app/commons/interfaces/Slide.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-touch-slider',
  templateUrl: './touch-slider.component.html',
  styleUrls: ['./touch-slider.component.scss'],
  standalone: true,
  imports: [CommonModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TouchSliderComponent {

  @Input() images: Slide[] = [];


  constructor() { }



}
