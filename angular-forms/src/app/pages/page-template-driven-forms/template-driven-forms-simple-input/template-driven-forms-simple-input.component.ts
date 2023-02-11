import { User } from './../../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms-simple-input',
  templateUrl: './template-driven-forms-simple-input.component.html',
  styleUrls: ['./template-driven-forms-simple-input.component.scss'],
})
export class TemplateDrivenFormsSimpleInputComponent {
  public user: User = {};

  constructor() {}

  formSubmit(): void {
    console.log('Submit: ', this.user);
  }
}
