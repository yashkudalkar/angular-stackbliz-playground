import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirectiveIf]',
})
export class MyCustomIfDirective {
  @Input()
  set appCustomDirectiveIf(show: any) {
    show
      ? this.container.createEmbeddedView(this.templateRef)
      : this.container.clear();
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}
}
