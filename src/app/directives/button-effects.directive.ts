import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ButtonEffects]'
})
export class ButtonEffectsDirective implements OnInit{


  @Input() defaultBackground: string = '#b22644';  // дефолтный цвет (например, красный)
  @Input() hoverBackground: string = '#7a162d';    // цвет при наведении

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // применяем дефолтный background при инициализации
    this.setBackground(this.defaultBackground);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.hoverBackground);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground(this.defaultBackground);
  }

  private setBackground(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s ease');
  }
}
