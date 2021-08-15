import {Injectable} from "@angular/core";

export interface Post {
  title: string,
  text: string,
  id: number
}

@Injectable({providedIn: 'root'})
export class PostService {
  public posts: Post[] = [
    {title: 'Post 1', text: 'Sample text for post 1', id: 1},
    {title: 'Post 2', text: 'Sample text for post 2', id: 2},
    {title: 'Post 3', text: 'Sample text for post 3', id: 3},
    {title: 'Post 4', text: 'Sample text for post 4', id: 4}
  ];

  public getById(id: number) {
    console.log('getBuId: ', id);
    return this.posts.find(post => post.id === id);
  }
}
