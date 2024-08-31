import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from 'src/app/commons/components/carousel/carousel.component';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { DestinationService } from 'src/app/core/services/destination.service';
import { DESTINATIONS } from 'src/app/core/mocks/destination-mocks';

@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss'],
  imports: [CarouselComponent, CommonModule, IonButton, IonIcon ],
  standalone: true
})
export class BottomSectionComponent implements OnInit {
  carouselItems: any;

  constructor(
    private destinationService: DestinationService
  ) { }

  ngOnInit(): void {
    this.carouselItems = DESTINATIONS;
    // this.destinationService.getDestinations().subscribe({
    //   next: (res) => {
    //     this.carouselItems = res;
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   }
    // })
  }


}
