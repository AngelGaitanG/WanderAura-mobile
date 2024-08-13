import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { BottomSectionComponent } from './components/bottom-section/bottom-section.component';
import { WanderApiService } from 'src/app/core/services/wander-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TopSectionComponent, BottomSectionComponent]
})
export class ProfilePage implements OnInit {
  info: any = {}
  constructor(
    private wanderApiService: WanderApiService
  ) { }

  ngOnInit() {
   this.wanderApiService.getProfile().subscribe({
     next: (res) => {
       this.info = res;
     },
     error: (err) => console.error(err),
     complete: () => console.log('Proceso terminado')
   })
   console.log(this.info);
  }

}
