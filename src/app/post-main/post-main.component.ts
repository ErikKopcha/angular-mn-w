import { Component } from "@angular/core";

// интерфейс для передачи параметров
export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'post-main',
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.css']
})

export class PostMainComponent {
  public posts: Post[] = [
    { title: 'Learn Angular and Components', text: 'qwerty qwerty qwerty qwerty qwerty', id: 1 },
    { title: 'Learn TypeScript', text: 'zxczxc zxczxc zxczxc zxczxc zxczxc ', id: 2 }
  ]

  public updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
