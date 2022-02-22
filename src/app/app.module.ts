import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetFilmsService } from './services/getfilms.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Импортируем модуль
  ],
  providers: [GetFilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
