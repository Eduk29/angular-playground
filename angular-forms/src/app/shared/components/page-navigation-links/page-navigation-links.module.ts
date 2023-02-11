import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageNavigationLinksComponent } from './page-navigation-links.component';

@NgModule({
  declarations: [PageNavigationLinksComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageNavigationLinksComponent],
})
export class PageNavigationLinksModule {}
