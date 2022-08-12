import { Directive } from '@angular/core';
import { Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myCustomIf]',
})
export class MyCustomIfDirective {
  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  @Input() set myCustomIf(shouldAddToDOM: boolean) {
    if (shouldAddToDOM) {
      // If the value is true, add template to the DOM
      this.container.createEmbeddedView(this.template);
    } else {
      // Otherwise delete template from the DOM
      this.container.clear();
    }
  }
}
