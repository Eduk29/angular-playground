import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MastheadComponent } from './masthead.component';

@NgModule({
  declarations: [MastheadComponent],
  imports: [CommonModule],
  exports: [MastheadComponent],
})
export class MastheadModule {}
