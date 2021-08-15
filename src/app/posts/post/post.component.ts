import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from "@angular/core";
import {Post} from "../../services/post.service"; // принимаем параметры из post-main.component

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // only for @Input changes
  encapsulation: ViewEncapsulation.None
})
export class PostComponent {

  @Input() post: Post;
  @Input() showIds: boolean;
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  constructor() { }

  public onRemovePost() {
    this.onRemove.emit(this.post.id);
  }
}
