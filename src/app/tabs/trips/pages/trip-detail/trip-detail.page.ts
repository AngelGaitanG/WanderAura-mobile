import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonImg, IonToolbar, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from 'src/app/core/services/trips.service';
import { TripResponse } from 'src/app/commons/interfaces/Trips.interface';
import { PaymentService } from 'src/app/core/services/payment.service';
import { TripPostsComponent } from '../../components/trip-posts/trip-posts';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.page.html',
  styleUrls: ['./trip-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonImg, IonButton, CommonModule, IonIcon, TripPostsComponent]
})
export class TripDetailPage implements OnInit {
  tripId: string | null = null;
  trip: any ;
  successPayment: boolean = false;

  constructor(private route: ActivatedRoute, private tripsService: TripsService,
    private paymentsService: PaymentService
  ) {
  }

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

  createPayment(tripId: string) {
    this.paymentsService.simplePayment(tripId).subscribe({
      next: (res) => {
        console.log(res);
        this.successPayment = true;
      },
      error(err) {
        console.error(err);
      },
      complete() {
        console.log('complete');
      },
    })
  }

}