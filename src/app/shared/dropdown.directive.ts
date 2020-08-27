import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // @HostBinding('class.show') isOpen = false;
  isOpen = false;
  @HostListener('click') onClick() {
    console.log(this.isOpen);
    const nextEl = this.el.nativeElement.querySelector('.dropdown-menu');
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.renderer.addClass(nextEl, 'show');
    } else {
      this.renderer.removeClass(nextEl, 'show');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
