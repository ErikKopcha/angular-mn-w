import {Component, NgModule} from "@angular/core";
import {HeaderModel} from "../calculator/HeaderModel";

@NgModule({})

export class Calc {
  private _text: string = 'text';
  private _component: Component;
  private _header: HeaderModel

  constructor() {
    this._component = void 0;
    // window.calc = this;

    this._header = new HeaderModel();
  }

  public get value() {
    return this._text;
  }

  public set value(text: string) {
    this._text = text;
  }

  public get header() {
    return this._header;
  }

  public update() {
    // this._header.component.text = '123';
  }

  public setModel(component) {
    this._header.component = component;
  }
}
