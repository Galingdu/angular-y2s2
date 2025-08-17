import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStarCursor]'
})
export class StarCursor {
constructor(private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const star = this.renderer.createElement('div');
    this.renderer.addClass(star, 'star');

    this.renderer.setStyle(star, 'position', 'absolute');
    this.renderer.setStyle(star, 'left', `${event.pageX - 5}px`);
    this.renderer.setStyle(star, 'top', `${event.pageY - 5}px`);
    this.renderer.setStyle(star, 'width', '10px');
    this.renderer.setStyle(star, 'height', '10px');
    this.renderer.setStyle(star, 'border-radius', '50%');
    this.renderer.setStyle(star, 'background', 'yellow');
    this.renderer.setStyle(star, 'box-shadow', '0 0 10px yellow, 0 0 20px gold');
    this.renderer.setStyle(star, 'pointer-events', 'none');
    this.renderer.setStyle(star, 'animation', 'blink 1s ease-out forwards');

    this.renderer.appendChild(document.body, star);

    setTimeout(() => {
      this.renderer.removeChild(document.body, star);
    }, 1000);
  }

}
