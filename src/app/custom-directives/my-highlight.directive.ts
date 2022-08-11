import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appMyHighlight]',
})
export class MyHighlightDirective {
  @Input() backgroundColor: string = 'green';
  @Input() foregroundColor: string = 'blue';
  @HostBinding('style.backgroundColor') bgColor: string;
  @HostBinding('style.color') color: string;
  @Input() hoverBackgroundColor: string = 'gray';
  @Input() hoverForegroundColor: string = 'orange';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  //
  //ngOnInit() {
  //   this.renderer.setStyle(
  //     this.elRef.nativeElement,
  //     'background-color',
  //     'green'
  //   );
  //   this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');
  // }

  ngOnInit() {
    this.bgColor = this.backgroundColor;
    this.color = this.foregroundColor;
  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.bgColor = this.hoverBackgroundColor;
    this.color = this.hoverForegroundColor;
  }

  @HostListener('mouseleave') onMouseExit(eventData: Event) {
    this.bgColor = this.backgroundColor;
    this.color = this.foregroundColor;
  }
}
