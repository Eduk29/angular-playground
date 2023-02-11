import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import { MastheadModule } from '../../shared/components/masthead/masthead.module';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { ReactiveFormGroupInputsComponent } from './reactive-form-group-inputs/reactive-form-group-inputs.component';
import { ReactiveFormSimpleInputComponent } from './reactive-form-simple-input/reactive-form-simple-input.component';
import { ReactiveFormsHomeComponent } from './reactive-forms-home/reactive-forms-home.component';
import { ReactiveFormsNestedInputsComponent } from './reactive-forms-nested-inputs/reactive-forms-nested-inputs.component';
import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFormsValidationComponent } from './reactive-forms-validation/reactive-forms-validation.component';

@NgModule({
  declarations: [
    ReactiveFormsHomeComponent,
    ReactiveFormSimpleInputComponent,
    ReactiveFormGroupInputsComponent,
    ReactiveFormsNestedInputsComponent,
    ReactiveFormsValidationComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MastheadModule,
    PageTitleModule,
    ReactiveFormsModule,
    ReactiveFormsRoutingModule,
  ],
  exports: [ReactiveFormsHomeComponent],
})
export class ReactiveFormsPlaygroudModule {}
