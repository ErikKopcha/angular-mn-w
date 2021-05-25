import {ChangeDetectorRef, Component, ElementRef} from "@angular/core";
import { Calc } from "../store/calc";

@Component({
  selector: 'app-core',
  template: ''
})

export abstract class CoreComponent {

  protected constructor(public store: Calc, public cdr: ChangeDetectorRef, public elRef: ElementRef) {
    this.store = store;

    const model = this.elRef.nativeElement.attributes['model'];
    console.log('model', model);
    if (model) store.setModel(this);
  }

  public update() {
    this.cdr.detectChanges();
  }
}
