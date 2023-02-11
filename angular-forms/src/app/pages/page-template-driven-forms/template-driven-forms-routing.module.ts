import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateDrivenFormsHomeComponent } from './template-driven-forms-home/template-driven-forms-home.component';

const routes: Routes = [
  { path: '', component: TemplateDrivenFormsHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateDrivenFormsRoutingModule {}
