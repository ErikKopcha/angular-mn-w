import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../services/post.service";

@Component({
  selector: 'post-detail',
  templateUrl: 'post-detail.component.html',
  styleUrls: ['post-detail.component.css']
})

export class PostDetailComponent implements OnInit {

  public postInfo: Post;

  constructor(
    private route: Router,
    private routeParams: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeParams.data.subscribe(data => {
      this.postInfo = data.post
    });

    // this.routeParams.params.subscribe((params: Params) => {
    //   this.postInfo = this.postService.getById(+params.id);
    //   console.log('post info: ', this.postInfo);
    // });
  }

  public moveToPosts() {
    this.route.navigate(['/post-main']);
  }
}
