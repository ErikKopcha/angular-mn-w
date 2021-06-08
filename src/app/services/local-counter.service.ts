import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {
  public counter:number = 0;

  constructor() {}

  public increase() {
    this.counter++;
  }

  public decrease() {
    this.counter--;
  }
}
