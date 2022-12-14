import { MastheadModule } from './masthead/masthead.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MastheadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
