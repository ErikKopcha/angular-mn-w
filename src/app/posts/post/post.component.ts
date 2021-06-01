import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from "@angular/core";
import { Post } from "../post-main/post-main.component"; // принимаем параметры из post-main.component

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // only for @Input changes
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
{
  // через декоратор принимаем параметры
  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  constructor() {}

  onRemovePost() {
    this.onRemove.emit(this.post.id);
  }

  ngOnChanges(changes: SimpleChanges) : void {
    console.log('OnChanges', changes)
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('infoRef', this.infoRef.nativeElement)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('OnDestroy post component')
  }
}
