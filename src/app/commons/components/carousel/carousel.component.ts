import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarouselItem } from '../../interfaces/Carousel.interface';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [CommonModule, IonButton],
  standalone: true
})
export class CarouselComponent implements OnInit {
  @Input() items: CarouselItem[] = [];

  currentIndex: number = 0;
  previousIndex: number = -1;

  ngOnInit(): void {
    if (this.items.length > 0) {
      this.currentIndex = 0;
    }
  }

  next(): void {
    this.previousIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateClasses();
  }

  prev(): void {
    this.previousIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.updateClasses();
  }

  updateClasses(): void {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
      item.classList.remove('prev', 'next', 'active');
      if (index === this.currentIndex) {
        item.classList.add('active');
      } else if (index === this.previousIndex) {
        if (this.currentIndex > this.previousIndex) {
          item.classList.add('prev');
        } else {
          item.classList.add('next');
        }
      }
    });
  }
}
