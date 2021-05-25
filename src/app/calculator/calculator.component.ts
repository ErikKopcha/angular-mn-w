import {ChangeDetectorRef, Component, ElementRef, NgModule} from "@angular/core";
import {Calc} from "../store/calc";
import {CoreComponent} from "../core/core.component";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['calculator.component.css']
})

export class CalculatorComponent extends CoreComponent{
  constructor(public store: Calc, public cdr: ChangeDetectorRef, public elRef: ElementRef) {
    super(store, cdr, elRef);
  }
}
