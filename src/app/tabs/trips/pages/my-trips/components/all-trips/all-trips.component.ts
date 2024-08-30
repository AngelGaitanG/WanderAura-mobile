import { Component, Input, OnInit } from "@angular/core";
import { TripsService } from "src/app/core/services/trips.service";
import { IonCard, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonChip, IonCardContent, IonImg, IonProgressBar, IonTitle } from "@ionic/angular/standalone"
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-all-trips',
    templateUrl: './all-trips.component.html',
    styleUrls: ['./all-trips.component.scss'],
    standalone: true,
    imports: [IonCard,IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonChip, IonCardContent, CommonModule, IonImg, IonProgressBar, IonTitle],
})
export class AllTripsComponent implements OnInit{ 
    trips: any = [];
    allTrips: any = []
    currentTrip: any = {};
    
    constructor(
        private tripsService: TripsService
    ){}

    get progressPercentage(): number {
        return (this.currentTrip.currentDay / this.currentTrip.totalDays) * 100;
      }
    
      get remainingDays(): number {
        return this.currentTrip.totalDays - this.currentTrip.currentDay;
      }

    ngOnInit(): void {
        this.tripsService.getUserTrips().subscribe({
            next: (res) => {
                this.trips = [ ...res.upcomingTrips, ...res.pastTrips];
                this.currentTrip = res.currentTrip;
                const upcomingTrips = res.upcomingTrips;
                const pastTrips = res.pastTrips;
                this.allTrips = [ ...upcomingTrips, ...pastTrips];
                console.log(this.allTrips);
            },
            error: (err) => console.error(err)
        });
    }
}