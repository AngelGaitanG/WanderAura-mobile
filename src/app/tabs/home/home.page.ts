import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, IonContent } from '@ionic/angular';
import { BottomSectionComponent } from './components/bottom-section/bottom-section.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, BottomSectionComponent, RouterLink]
})
export class HomePage{
  constructor(
    private authService: AuthService, private router: Router
  ) {}
  isAuthenticated = true;


  cards = [
    { title: 'Trips', img: '../../assets/backgrounds/flowers.jpg', routerLink: 'trips' },
    { title: 'Activities', img: '../../assets/backgrounds/country.jpg', routerLink: 'activities' },
  ];

  @ViewChild(IonContent) content!: IonContent;

  getStarted() {
    this.router.navigate(['/tabs/trips']);
  }

  up() {
    this.content.scrollToTop(800);
  }
}
