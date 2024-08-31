import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TouchSliderComponent } from 'src/app/commons/components/slides/touch-slider/touch-slider.component';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { MiddleSectionComponent } from './components/middle-section/middle-section.component';
import { BottomSectionComponent } from './components/bottom-section/bottom-section.component';
import { TripsService } from 'src/app/core/services/trips.service';
import { TripResponse } from 'src/app/commons/interfaces/Trips.interface';
import { TRIPS } from 'src/app/core/mocks/trips-mocks';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TopSectionComponent, MiddleSectionComponent, BottomSectionComponent]
})
export class TripsPage implements OnInit {
  trips: TripResponse[] = [];
  constructor(private tripsService: TripsService) { }

  ngOnInit(): void {
    this.trips = TRIPS; // ESTE ES EL MOCK DE TRIPS
    
    // this.tripsService.getTrips().subscribe({
    //   next: (res) => {
    //     this.trips = res;
    //   },
    //   error(err) {
    //     console.error(err);
    //   }
    // });
  }

}
