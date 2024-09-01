import { Component, OnInit } from "@angular/core";
import { TripsService } from "src/app/core/services/trips.service";
import { IonCard, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonChip, IonCardContent } from "@ionic/angular/standalone"
import { CommonModule } from "@angular/common";
import { MY_TRIPS } from "src/app/core/mocks/my-trips-mocks";

@Component({
    selector: 'app-past-trips',
    templateUrl: './past-trips.component.html',
    styleUrls: ['./past-trips.component.scss'],
    standalone: true,
    imports: [IonCard,IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonChip, IonCardContent, CommonModule],
})
export class PastTripsComponent implements OnInit{
    
    trips: any = [];

    constructor(
        private tripsService: TripsService
    ){}
    ngOnInit(): void {
        this.trips = MY_TRIPS.pastTrips;//MOCKS
        // this.trips = this.tripsService.getUserTrips().subscribe({
        //     next: (res) => {
        //         this.trips = res.pastTrips;
        //         console.log(this.trips);
        //     },
        //     error: (err) => console.error(err)
        // });
    }
}