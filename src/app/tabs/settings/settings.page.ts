import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonIcon, IonCardTitle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonIcon, IonCardTitle]
})
export class SettingsPage {

  constructor(
    private router: Router
  ) { }

  logout() {
    localStorage.clear();
    this.router.navigate(['auth']);
  }


}
