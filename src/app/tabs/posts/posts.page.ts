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
  posts: any[] = [];
  page = 0;
  limit = 10; // número de posts a cargar por página

  allPosts: any[] = [
    { id: 1, imageUrl: 'https://via.placeholder.com/150', description: 'Post 1' },
    { id: 2, imageUrl: 'https://via.placeholder.com/150', description: 'Post 2' },
    { id: 3, imageUrl: 'https://via.placeholder.com/150', description: 'Post 3' },
    { id: 4, imageUrl: 'https://via.placeholder.com/150', description: 'Post 4' },
    { id: 5, imageUrl: 'https://via.placeholder.com/150', description: 'Post 5' },
    { id: 6, imageUrl: 'https://via.placeholder.com/150', description: 'Post 6' },
    { id: 7, imageUrl: 'https://via.placeholder.com/150', description: 'Post 7' },
    { id: 8, imageUrl: 'https://via.placeholder.com/150', description: 'Post 8' },
    { id: 9, imageUrl: 'https://via.placeholder.com/150', description: 'Post 9' },
    { id: 10, imageUrl: 'https://via.placeholder.com/150', description: 'Post 10' },
    { id: 11, imageUrl: 'https://via.placeholder.com/150', description: 'Post 11' },
    { id: 12, imageUrl: 'https://via.placeholder.com/150', description: 'Post 12' },
    { id: 13, imageUrl: 'https://via.placeholder.com/150', description: 'Post 13' },
    { id: 14, imageUrl: 'https://via.placeholder.com/150', description: 'Post 14' },
    { id: 15, imageUrl: 'https://via.placeholder.com/150', description: 'Post 15' },
    // Agrega más posts ficticios si es necesario
  ];

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts(event?: any) {
    const start = this.page * this.limit;
    const end = start + this.limit;
    const newPosts = this.allPosts.slice(start, end);

    this.posts = [...this.posts, ...newPosts];
    this.page++;

    if (event) {
      event.target.complete();
    }
  }

  loadMorePosts(event: any) {
    this.loadPosts(event);
  }

  openPost(post: any) {
    // Aquí puedes simular la apertura del post (por ejemplo, mostrar un modal)
    console.log('Post seleccionado:', post);
  }
}
