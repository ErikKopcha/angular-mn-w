import {Component, EventEmitter, Output, ViewChild} from "@angular/core";
import { Post } from "../post-main/post-main.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent {
  // для отправки данных наружу с компонента
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('titleInput', {static: false}) inputRef;

  public title: string = '';
  public text: string = '';

  public onResetForm() {
    this.title = '';
    this.text = '';
  }

  public addPost() {
    if (this.validateForm()) {
      const post: Post = {
        text: this.text,
        title: this.title,
        id: 0
      }

      // для отправки данных наружу с компонента
      this.onAdd.emit(post)

      this.onResetForm();
    }
  }

  public validateForm() {
    if (this.title.trim() === '') return false;
    if (this.text.trim() === '') return false;

    return true;
  }

  public focusTitle() {
    this.inputRef.nativeElement.focus();
  }
}
