import {ChangeDetectorRef, Component, ElementRef} from "@angular/core";
import {CoreComponent} from "../../core/core.component";
import {Calc} from "../../store/calc";

@Component({
  selector: 'app-button',
  template: '<button>{{ text }}</button>'
})

export class ButtonComponent extends CoreComponent {
  private _text = 'qweqweqwe';

  constructor(public store: Calc, public cdr: ChangeDetectorRef, public elRef: ElementRef) {
    super(store, cdr, elRef);
    console.log(elRef);
    console.log(cdr);
    console.log(store);
  }

  public set text(value) {
    this._text = value;
    this.update();
  }

  public get text() {
    return this._text;
  }
}
