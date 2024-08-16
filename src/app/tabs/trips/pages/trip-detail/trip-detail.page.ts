import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonImg, IonToolbar, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from 'src/app/core/services/trips.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.page.html',
  styleUrls: ['./trip-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonImg, IonButton, CommonModule]
})
export class TripDetailPage implements OnInit {
  tripId: string | null = null;
  trip: any = {};

  constructor(private route: ActivatedRoute, private tripsService: TripsService) {}

  ngOnInit() {
    this.tripId = this.route.snapshot.paramMap.get('trip');
    if(this.tripId !== null) {
      this.tripsService.getTrip(this.tripId).subscribe({
        next: (res) => {
          this.trip = res;
          console.log(this.trip);
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    }
  }
}