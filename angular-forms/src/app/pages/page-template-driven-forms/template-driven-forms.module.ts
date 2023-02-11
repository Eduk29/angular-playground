import { PasswordValidatorDirective } from './../../shared/directives/password-validator.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';

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
