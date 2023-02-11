import { FormGroup } from '@angular/forms';
import { User } from './../../../shared/models/user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms-validation',
  templateUrl: './template-driven-forms-validation.component.html',
  styleUrls: ['./template-driven-forms-validation.component.scss'],
})
export class TemplateDrivenFormsValidationComponent {
  public user: User = {};

  constructor() {}

  public formSubmit(): void {
    console.log('Submit: ', this.user);
  }
}
