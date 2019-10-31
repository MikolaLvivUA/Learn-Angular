import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({ /*Вказує на те що буде описуватись якийсь певний модуль*/
  declarations: [ /*Компоненти які компоненти наш модуль буде використовувати*/
    AppComponent
  ],
  imports: [ /*Всі сторонні бібліотеки які підключаються з боку*/
    BrowserModule /*Цу бібліотека яка має стандартні речі типу ifElse і For*/
  ],
  providers: [], /*Використовується для service запити на  backend*/
  bootstrap: [AppComponent] /*Вказаує на те що в першу чергу ми запускаєм наш appComponent*/
})
export class AppModule { }
