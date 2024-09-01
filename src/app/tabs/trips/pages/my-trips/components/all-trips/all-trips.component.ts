import { Component, Input, OnInit } from "@angular/core";
import { TripsService } from "src/app/core/services/trips.service";
import { IonCard, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonChip, IonCardContent, IonImg, IonProgressBar, IonTitle, IonContent } from "@ionic/angular/standalone"
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { MY_TRIPS } from "src/app/core/mocks/my-trips-mocks";

@Component({
    selector: 'app-all-trips',
    templateUrl: './all-trips.component.html',
    styleUrls: ['./all-trips.component.scss'],
    standalone: true,
    imports: [IonCard,IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonChip, IonCardContent, CommonModule, IonImg, IonProgressBar, IonTitle, IonContent ],
})
export class AllTripsComponent implements OnInit{ 
    trips: any = [];
    allTrips: any = []
    currentTrip: any = {};
    
    constructor(
        private tripsService: TripsService, private router: Router
    ){}

    goToTripDetail(id: string) {
        this.router.navigate(['tabs/trips/no-booking', id])
      }

    get progressPercentage(): number {
        return (this.currentTrip.currentDay / this.currentTrip.totalDays) * 100;
      }
    
      get remainingDays(): number {
        return this.currentTrip.totalDays - this.currentTrip.currentDay;
      }

    ngOnInit(): void {
        this.trips = [...MY_TRIPS.upcomingTrips, ...MY_TRIPS.pastTrips]; //MOCKS
        this.currentTrip = MY_TRIPS.currentTrip;//MOCKS
        // this.tripsService.getUserTrips().subscribe({
        //     next: (res) => {
        //         this.trips = [ ...res.upcomingTrips, ...res.pastTrips];
        //         this.currentTrip = res.currentTrip;
        //         const upcomingTrips = res.upcomingTrips;
        //         const pastTrips = res.pastTrips;
        //         this.allTrips = [ ...upcomingTrips, ...pastTrips];
        //         console.log(this.allTrips);
        //     },
        //     error: (err) => console.error(err)
        // });
    }
}