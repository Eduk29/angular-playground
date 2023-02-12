import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { ReactiveFormsPlaygroudModule } from './pages/page-reactive-forms/reactive-forms.module';
import { TemplateDrivenFormsModule } from './pages/page-template-driven-forms/template-driven-forms.module';
import { MastheadModule } from './shared/components/masthead/masthead.module';
import { PageNavigationLinksModule } from './shared/components/page-navigation-links/page-navigation-links.module';

@NgModule({
  declarations: [AppComponent, PageHomeComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MastheadModule,
    PageNavigationLinksModule,
    ReactiveFormsPlaygroudModule,
    TemplateDrivenFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
