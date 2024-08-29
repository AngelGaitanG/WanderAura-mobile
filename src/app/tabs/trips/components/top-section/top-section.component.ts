import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss'],
  standalone: true, 
  imports: [IonButton],
})
export class TopSectionComponent {

  constructor(private route: Router) { }

  goToMyTrips() {
    this.route.navigate(['tabs/trips/my-trips'])

  }

}
