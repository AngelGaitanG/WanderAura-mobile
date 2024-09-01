import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonImg, IonToolbar, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from 'src/app/core/services/trips.service';
import { MY_TRIPS_MIXED } from 'src/app/core/mocks/my-trips-mocks';

@Component({
  selector: 'app-trip-detail-nobooking',
  templateUrl: './trip-detail-nobooking.page.html',
  styleUrls: ['./trip-detail-nobooking.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonImg, IonToolbar, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonButton, IonIcon, CommonModule, FormsModule]
})
export class TripDetailNobookingPage implements OnInit {
  tripId: string | null = null;
  trip: any ;

  constructor(private route: ActivatedRoute, private tripsService: TripsService) { }

  ngOnInit() {
    this.tripId = this.route.snapshot.paramMap.get('trip');
    this.trip = MY_TRIPS_MIXED.filter(trip => trip.id === this.tripId)[0];
    // if(this.tripId !== null) {
    //   this.tripsService.getTrip(this.tripId).subscribe({
    //     next: (res) => {
    //       this.trip = res;
    //     },
    //     error: (err) => {
    //       console.error(err);
    //     },
    //   });
    // }
  }

}
