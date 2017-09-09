import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {
  @HostBinding('style.color') color = 'black';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    // this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow');
    this.color = 'yellow';
  }
}
