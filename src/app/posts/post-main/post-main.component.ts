import {Component, OnInit} from "@angular/core";
import {Post, PostService} from "../../services/post.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'post-main',
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.css']
})

export class PostMainComponent implements OnInit {
  public search: string = '';
  public isShowIds: boolean = false;

  constructor(
      public posts: PostService,
      private route: Router,
      private routeParams: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeParams.queryParams.subscribe((params: Params) => {
      this.isShowIds = !!params.showIds;
    });
  }

  public moveToPosts() {
    this.route.navigate(['/post-main']);
  }

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
