import {Component, EventEmitter, Output, ViewChild} from "@angular/core";
import {Post} from "../../services/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent {
  // для отправки данных наружу с компонента
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() showIds: EventEmitter<any> = new EventEmitter();
  @ViewChild('titleInput', {static: false}) inputRef;

  public title: string = '';
  public text: string = '';

  constructor(
    private route: Router
  ) {}


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

  public toggleIds() {
    this.showIds.emit();
  }

  // public routeToIds() {
  //   this.route.navigate(['/post-main'], {
  //     queryParams: {
  //       showIds: true
  //     }
  //   })
  // }
}
