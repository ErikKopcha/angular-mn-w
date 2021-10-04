import { Component, OnInit } from '@angular/core';
import { group, state, trigger, style, transition, animate, query, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('box', [
      state('start', style({ background: 'blue' })),
      state('end', style({ background: 'red', transform: 'scale(1.2)' })),
      state('special', style({ background: 'orange', transform: 'scale(0.5)', borderRadius: '50%' })),
      transition('start => end', animate(450)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special <=> *', [
        style({ background: 'green' }),
        animate(500, style({ background: 'pink' })),
        animate(800)
      ]),
      // void => *
      transition(':enter', [
        animate(4000, keyframes([
          style({ background: 'red', offset: 0 }),
          style({ background: 'black', offset: 0.2}),
          style({ background: 'orange', offset: 0.3 }),
          style({ background: 'blue', offset: 1 }),
        ]))
        // style({ opacity: 0 }),
        // animate(600)
      ]),
      // * => void
      transition(':leave', [
        style({ opacity: 1 }),
        group([
          query('span', animate(1500, style({ color: 'red', fontSize: '0.5rem' }))),
          animate(400, style({ opacity: 0, transform: 'scale(1.2)' })),
          animate(200, style({ color: '#000', fontWeight: 'bold' }))
        ])
      ]),
    ])
  ]
}) 
export class AnimationComponent implements OnInit {
  public boxState = 'start';
  public visible = true;

  constructor() { }

  ngOnInit() {
  }

  public animate() {
    this.boxState = this.boxState === 'start' ? 'end' : 'start';
  }
  
  public animationStarted(event: AnimationEvent) {
    console.log('animationStarted', event);
  }
    
  public animationDone(event: AnimationEvent) {
    console.log('animationDone', event);
  }
}
