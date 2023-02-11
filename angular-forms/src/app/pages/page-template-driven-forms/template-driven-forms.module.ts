import { PasswordValidatorDirective } from './../../shared/directives/password-validator.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import { MastheadModule } from '../../shared/components/masthead/masthead.module';
import { PageTitleModule } from './../../shared/components/page-title/page-title.module';
import { TemplateDrivenFormsHomeComponent } from './template-driven-forms-home/template-driven-forms-home.component';
import { TemplateDrivenFormsRoutingModule } from './template-driven-forms-routing.module';
import { TemplateDrivenFormsSimpleInputComponent } from './template-driven-forms-simple-input/template-driven-forms-simple-input.component';
import { TemplateDrivenFormsValidationComponent } from './template-driven-forms-validation/template-driven-forms-validation.component';

@NgModule({
  declarations: [
    PasswordValidatorDirective,
    TemplateDrivenFormsHomeComponent,
    TemplateDrivenFormsSimpleInputComponent,
    TemplateDrivenFormsValidationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MastheadModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    PageTitleModule,
    TemplateDrivenFormsRoutingModule,
  ],
  exports: [],
})
export class TemplateDrivenFormsModule {}
