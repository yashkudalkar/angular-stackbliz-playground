import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyHighlightDirective } from './custom-directives/my-highlight.directive';
import { MyCustomIfDirective } from './custom-directives/my-custom-if.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MyHighlightDirective,
    MyCustomIfDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
