import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonMenu, IonButtons, IonRouterOutlet, IonList, IonIcon, IonMenuToggle, IonItem, IonLabel, IonTabs, IonTabButton, IonTabBar } from '@ionic/angular/standalone';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonMenu, IonButtons, IonRouterOutlet, IonList, IonIcon, IonMenuToggle, IonItem, IonLabel, RouterLink, RouterLinkActive, IonTabs, IonTabButton, IonTabBar ],
})
export class TabsPage {

  constructor() { }


}
