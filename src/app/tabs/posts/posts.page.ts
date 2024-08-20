import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonInfiniteScroll, IonInfiniteScrollContent,  } from "@ionic/angular/standalone";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
  imports: [ IonContent, IonGrid, IonRow, IonCol, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, CommonModule ],
  standalone: true
})
export class PostsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('PostsPage');
  }

}
