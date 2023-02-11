import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-simple-input',
  templateUrl: './reactive-form-simple-input.component.html',
  styleUrls: ['./reactive-form-simple-input.component.scss'],
})
export class ReactiveFormSimpleInputComponent {
  public simpleInputForm: UntypedFormGroup;
  public nameFromInput?: string;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.simpleInputForm = formBuilder.group({
      inputName: new UntypedFormControl(''),
    });
  }

  public get inputName(): AbstractControl | null {
    return this.simpleInputForm.get('inputName');
  }

  public formSubmit(): void {
    this.nameFromInput = !!this.inputName ? this.inputName.value : '';
  }
}
