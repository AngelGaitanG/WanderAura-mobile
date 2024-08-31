import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonImg, IonTabs, IonTabBar, IonLabel, IonTabButton, IonRouterOutlet, IonRouterLink} from '@ionic/angular/standalone';
import { TripsService } from 'src/app/core/services/trips.service';
import { MyTripResponse } from 'src/app/commons/interfaces/Trips.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.page.html',
  styleUrls: ['./my-trips.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonImg, CommonModule, IonTabs, IonTabBar, IonLabel, IonTabButton, IonRouterLink, IonRouterOutlet, RouterLink, RouterLinkActive]
})
export class MyTripsPage implements OnInit {

  trips: any = {};

  constructor(
    private tripsService: TripsService
  ) { }

  tab: string = 'todos'

  ngOnInit() {
    this.tripsService.getUserTrips().subscribe({
      next: (res) => {
        this.trips = res;
        console.log(this.trips);
      },
      error: (err) => console.error(err)
    })
  }

}
