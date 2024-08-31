import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonInfiniteScroll, IonInfiniteScrollContent,  } from "@ionic/angular/standalone";

@Component({
    selector: 'app-trip-posts',
    templateUrl: './trip-posts.html',
    styleUrls: ['./trip-posts.scss'],
    imports: [ IonContent, IonGrid, IonRow, IonCol, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, CommonModule ],
    standalone: true
})

export class TripPostsComponent implements OnInit {
  @Input() posts: any[] = [];

  
    ngOnInit() {
      
      console.log(this.posts);
    }
  
    loadMorePosts($event: any) {
      console.log("hola")
    }
  

  
    openPost(post: any) {
      // Aquí puedes simular la apertura del post (por ejemplo, mostrar un modal)
    }
  }