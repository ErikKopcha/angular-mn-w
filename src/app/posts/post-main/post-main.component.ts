import {Component} from "@angular/core";
import {Post, PostService} from "../../services/post.service";

@Component({
  selector: 'post-main',
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.css']
})

export class PostMainComponent {
  search: string = '';
  isShowIds: boolean = false;

  constructor(
      public posts: PostService
  ) {}

  public updatePosts(post: Post) {
    this.posts.posts.unshift(post);
  }

  public removePost(id: number) {
    this.posts.posts = this.posts.posts.filter(post => post.id !== id);
    console.log(`id to remove`, id);
  }

  public showIds($event: any) {
    this.isShowIds = !this.isShowIds;
  }
}
