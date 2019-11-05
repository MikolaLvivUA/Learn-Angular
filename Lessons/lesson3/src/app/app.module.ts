import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PowNumberPipe } from './pow-number.pipe';
import { HoverRizerDirective } from './hover-rizer.directive';
import { HouseComponentComponent } from './components/house-component/house-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PowNumberPipe,
    HoverRizerDirective,
    HouseComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
