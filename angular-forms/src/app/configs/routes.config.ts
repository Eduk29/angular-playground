import { Routes } from '@angular/router';

import { PageHomeComponent } from '../pages/page-home/page-home.component';

export const routesConfig: Routes = [
  { path: 'home', component: PageHomeComponent },
  {
    path: 'reactive-forms',
    loadChildren: () =>
      import('../pages/page-reactive-forms/reactive-forms.module').then(
        (m) => m.ReactiveFormsPlaygroudModule
      ),
  },
  {
    path: 'template-driven-forms',
    loadChildren: () =>
      import(
        '../pages/page-template-driven-forms/template-driven-forms.module'
      ).then((m) => m.TemplateDrivenFormsModule),
  },
  { path: '**', redirectTo: 'home' },
];
