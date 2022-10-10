import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MastheadModule} from 'angular-external-lib/lib'

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, MastheadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
