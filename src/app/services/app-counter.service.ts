import { Injectable } from "@angular/core";

// можно написать providedIn: 'root', чтобы не импортировать в providers
@Injectable({providedIn: 'root'})

export class AppCounterService {
  public counter:number = 0;

  constructor() {}

  public increase() {
    this.counter++;
  }

  public decrease() {
    this.counter--;
  }
}
