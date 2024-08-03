import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonMenu, IonButtons, IonRouterOutlet, IonList, IonIcon, IonMenuToggle, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonMenu, IonButtons, IonRouterOutlet, IonList, IonIcon, IonMenuToggle, IonItem, IonLabel ],
})
export class TabsPage {

  constructor() { }


}
