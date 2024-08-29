import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TripsService } from 'src/app/core/services/trips.service';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.page.html',
  styleUrls: ['./my-trips.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MyTripsPage implements OnInit {

  constructor(
    private tripsService: TripsService
  ) { }

  ngOnInit() {
    this.tripsService.getUserTrips().subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

}
