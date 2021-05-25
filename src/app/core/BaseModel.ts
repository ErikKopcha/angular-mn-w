import {Component} from "@angular/core";

export class BaseModel {
  private _component: Component
  public component?: Component

  constructor() {
    this.component = null;
  }

  // public set component(value) {
  //   this._component = value;
  // }
  //
  // public get component() {
  //   return this._component;
  // }
}
