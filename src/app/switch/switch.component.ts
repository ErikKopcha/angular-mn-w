import {ChangeDetectionStrategy, Component, OnInit, Provider} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent implements OnInit {
  state: boolean = false;

  constructor() { }

  ngOnInit() { }

  setState(type: boolean) {
    this.state = type;
  }
}
