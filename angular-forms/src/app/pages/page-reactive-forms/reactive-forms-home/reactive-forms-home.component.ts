import { Component } from '@angular/core';
import { PagesMastheadConfig } from 'src/app/configs/pages-masthead.config';

import { IMasthead } from '../../../shared/models/masthead.model';

@Component({
  templateUrl: './reactive-forms-home.component.html',
  styleUrls: ['./reactive-forms-home.component.scss'],
})
export class ReactiveFormsHomeComponent {
  public mastheadData: IMasthead =
    PagesMastheadConfig.reactiveFormsMastheadData;

  constructor() {}
}
