import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsHomeComponent } from './reactive-forms-home/reactive-forms-home.component';

const routes: Routes = [{ path: '', component: ReactiveFormsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormsRoutingModule {}
