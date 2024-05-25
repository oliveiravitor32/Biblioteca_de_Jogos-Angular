import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundImage]',
})
export class BackgroundImageDirective {
  @Input('appBackgroundImage')
  set imageUrl(value: string | undefined) {
    this.element.nativeElement.style.backgroundImage = `linear-gradient(180deg, rgba(31,31,80,0.75) 2%, rgba(5,5,32,0.75) 100%), url('${value}')`;
  }

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundRepeat = 'no-repeat';
    this.element.nativeElement.style.backgroundSize = 'cover';
    this.element.nativeElement.style.filter = 'filter: brightness(40%)';
  }
}
