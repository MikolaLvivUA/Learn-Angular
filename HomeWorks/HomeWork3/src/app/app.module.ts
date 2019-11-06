import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ShowAllComponent } from './components/show-all/show-all.component';
import { CreateHouseComponent } from './components/create-house/create-house.component';
import { ConverterPipe } from './pipes/converter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RegisterComponent,
    LoginComponent,
    ShowAllComponent,
    CreateHouseComponent,
    ConverterPipe,


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
