import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirectives {
  @Input('appStyle') color: string = 'blue';
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string}
  @HostBinding('style.color') elColor = null;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    // elRef.nativeElement.style.color = `red`;
  }

  @HostListener('click', ["$event"]) onClick(event: Event) {
    console.log('event', event);
  }

  @HostListener('mouseenter', ["$event"]) onMouseEnter(event: Event) {
    this.elColor = this.color;
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color);
    // this.renderer.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border);
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    // this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }
  @HostListener('mouseleave', ["$event"]) onMouseLeave(event: Event) {
    this.elColor = null;
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'border', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', null);
    // this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', null);
  }
}
