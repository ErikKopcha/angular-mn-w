import { Component, Input } from "@angular/core";
import { Post } from "../post-main/post-main.component"; // принимаем параметры из post-main.component

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  // через декоратор принимаем параметры
  @Input() post: Post
  constructor() {}
}
