import { Component, Input, OnInit } from "@angular/core";
import { TripsService } from "src/app/core/services/trips.service";
import { IonCard, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonChip, IonCardContent } from "@ionic/angular/standalone"
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-all-trips',
    templateUrl: './all-trips.component.html',
    styleUrls: ['./all-trips.component.scss'],
    standalone: true,
    imports: [IonCard,IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonChip, IonCardContent, CommonModule],
})
export class AllTripsComponent implements OnInit{ 
    trips: any = {};
    allTrips: any = []

    
    constructor(
        private tripsService: TripsService
    ){}
    ngOnInit(): void {
        this.trips = this.tripsService.getUserTrips().subscribe({
            next: (res) => {
                const currentTrips = res.currentTrip;
                const upcomingTrips = res.upcomingTrips;
                const pastTrips = res.pastTrips;
                this.allTrips = [currentTrips, ...upcomingTrips, ...pastTrips];
                console.log(this.allTrips);
            },
            error: (err) => console.error(err)
        });
    }
}