import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true,
})
export class CustomDirectiveDirective implements OnInit {
  constructor(private element: ElementRef) {
    element;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.element.nativeElement.style.color = 'white';
    this.element.nativeElement.style.width = '200px';
    this.element.nativeElement.style.padding = '20px 0px';
    this.element.nativeElement.style.background = 'red';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = 'white';
    this.element.nativeElement.style.width = '200px';
    this.element.nativeElement.style.padding = '20px 0px';
    this.element.nativeElement.style.background = 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.background = 'tomato';
  }

  private setStyles(
    color: string | null,
    padding: string | null,
    background: string | null
  ) {
    this.element.nativeElement.style.color = color;
    this.element.nativeElement.style.padding = padding;
    this.element.nativeElement.style.background = background;
  }
}
