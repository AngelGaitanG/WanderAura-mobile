import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, IonContent } from '@ionic/angular';
import { BottomSectionComponent } from './components/bottom-section/bottom-section.component';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, BottomSectionComponent]
})
export class HomePage implements OnInit{
  constructor(
    private authService: AuthService
  ) {}
  isAuthenticated = false;

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAutenticated();
  }
  cards = [
    { title: 'Trips', img: '../../assets/backgrounds/flowers.jpg' },
    { title: 'Activities', img: '../../assets/backgrounds/country.jpg' },
    { title: 'Tours', img: '../../assets/backgrounds/forest.jpg' },
    { title: 'Tour Guides', img: '../../assets/backgrounds/autumn.jpg' }
  ];

  @ViewChild(IonContent) content!: IonContent;

  up() {
    this.content.scrollToTop(800);
    console.log("hiciste click");
  }
}
