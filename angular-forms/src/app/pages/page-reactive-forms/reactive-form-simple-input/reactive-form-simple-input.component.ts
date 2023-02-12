import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-simple-input',
  templateUrl: './reactive-form-simple-input.component.html',
  styleUrls: ['./reactive-form-simple-input.component.scss'],
})
export class ReactiveFormSimpleInputComponent {
  public simpleInputForm: FormGroup;
  public nameFromInput?: string;

  constructor(private formBuilder: FormBuilder) {
    this.simpleInputForm = formBuilder.group({
      inputName: new FormControl<string | null>(null),
    });
  }

  public get inputName(): AbstractControl | null {
    return this.simpleInputForm.get('inputName');
  }

  public formSubmit(): void {
    this.nameFromInput = !!this.inputName ? this.inputName.value : '';
  }
}
