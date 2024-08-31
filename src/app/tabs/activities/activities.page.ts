import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, IonLabel, IonChip, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard } from '@ionic/angular/standalone';
import { IActivity } from 'src/app/commons/interfaces/Activities.interface';
import { ActivityService } from 'src/app/core/services/activity.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ACTIVITIES } from 'src/app/core/mocks/activities-mocks';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton, CommonModule, FormsModule, IonLabel, IonChip, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard]
})
export class ActivitiesPage implements OnInit{

  activities: IActivity[] = []
  activityImages: string[] = [
    'https://s2.wklcdn.com/image_121/3652082/103443425/71893091.400x300.jpg',
    'https://s1.wklcdn.com/image_107/3213317/66520616/43920358.400x300.jpg',
    'https://en.harzinfo.de/fileadmin/_processed_/a/d/csm_Mountainbiking-Klippen-Oberharz-Volksbank-Arena-Harz-S.Schieck-3_9429738a3f.jpg',
    'https://bloximages.chicago2.vip.townnews.com/sentinel-echo.com/content/tncms/assets/v3/editorial/7/e8/7e80e2a0-e1a8-11e7-afbd-6f53fac1bde1/5a33e35ad6887.image.jpg?resize=400%2C300',
    'https://cdn1.yumping.com/emp/fotos/4/2/3/1/9/tm_p-42319-vistas-al-pueblo-blanco-a-caballo1664359372_16643594613042.jpg',
    'https://cdn1.surfcampseurope.com/media/W1siZiIsIjIwMTgvMTAvMTAvNjZuM2xjOTRlel9Db2ZldGVfU3VyZi5qcGciXSxbInAiLCJvcmllbnQiXSxbInAiLCJ0aHVtYiIsIjQwMHgzMDAjIix7ImZvcm1hdCI6ImpwZyJ9XSxbInAiLCJjb21wcmVzcyJdXQ/Cofete-Surf.jpg?sha=a8330940cf5d7d17',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e7/97/33/amazing.jpg?w=400&h=-1&s=1',
    'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/4a/57/66.jpg',
    'https://www.tortosaturisme.cat/wp-content/uploads/2019/07/Paradis-1-1920x700-dsk-400x300.jpg', 
  ];

  constructor(
    private activityService: ActivityService, private http: HttpClient
  ) { }

  
  ngOnInit(): void {
    this.activities = ACTIVITIES; // ESTE ES UN MOCK

    // this.activityService.getDestinations().subscribe({
    //   next: (res) => {
    //     this.activities = res;
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   }
    // });
  }

 


}
