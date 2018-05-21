import { Directive } from '@angular/core';

import { ElementRef, Input, Output, HostListener } from '@angular/core';


// 在引用的时候没有加“[]” ?


@Directive({
  selector: '[appHeroColor]'
})
export class HeroColorDirective {
  color: string;
  constructor(private ref: ElementRef) { }
  @Input()
  appHeroColor: string;


  @Input() defaultColor: string;

  @HostListener('mouseenter')
  MouseEvent($event) {
    const color: string = this.appHeroColor || this.defaultColor || 'red';
    this.setColor(color);
  }

  @HostListener('mouseleave')
  MouseLeave() {
    this.setColor(null);
  }

  setColor(color: string) {
    this.ref.nativeElement.style.backgroundColor = color;

  }

}
