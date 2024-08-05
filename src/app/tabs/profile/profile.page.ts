import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { BottomSectionComponent } from './components/bottom-section/bottom-section.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TopSectionComponent, BottomSectionComponent]
})
export class ProfilePage  {

  constructor() { }


}
