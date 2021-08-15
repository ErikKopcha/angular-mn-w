import {Pipe, PipeTransform} from '@angular/core';
import {Post} from "../services/post.service";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(post: Post[], search: string): Post[] {
    if (!search.trim()) return post;
    return post.filter(item => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    })
  }
}
