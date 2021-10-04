import { Component, OnInit } from '@angular/core';
import { boxAnimation } from '../app.animation';

@Component({
  selector: 'app-ng-animation',
  template: `
    <button (click)="visible = !visible" class="mb-2">Toggle</button>
    <div *ngIf="visible" [@bounce] class="rect"></div>
  `,
  styles: [`
    .rect {
      width: 150px;
      height: 150px;
      border: 1px solid black;
    }
  `],
  animations: [boxAnimation]
})
export class NgAnimationComponent implements OnInit {
  public visible: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
