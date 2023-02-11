import { Component } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { phoneValidator } from '../../../shared/validators/phone.validator';

@Component({
  selector: 'app-reactive-forms-validation',
  templateUrl: './reactive-forms-validation.component.html',
  styleUrls: ['./reactive-forms-validation.component.scss'],
})
export class ReactiveFormsValidationComponent {
  public validationForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.validationForm = formBuilder.group({
      name: new UntypedFormControl('', [Validators.required, Validators.minLength(4)]),
      lastname: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      birthday: new UntypedFormControl(''),
      age: new UntypedFormControl(''),
      contacts: formBuilder.group(
        {
          address: new UntypedFormControl(''),
          state: new UntypedFormControl(''),
          city: new UntypedFormControl(''),
          zipCode: new UntypedFormControl(''),
          email: new UntypedFormControl(''),
          phone: new UntypedFormControl('', [
            Validators.required,
            Validators.minLength(10),
            phoneValidator,
          ]),
          cellphone: new UntypedFormControl(''),
        },
        { updateOn: 'blur' }
      ),
    });
  }

  public get contacts(): AbstractControl | null {
    return this.validationForm.get('contacts');
  }

  public get IsButtonDisabled(): boolean {
    return !this.validationForm.valid;
  }

  public get email(): AbstractControl | null {
    return !!this.contacts ? this.contacts.get('email') : null;
  }

  public get lastname(): AbstractControl | null {
    return this.validationForm.get('lastname');
  }

  public get name(): AbstractControl | null {
    return this.validationForm.get('name');
  }

  public get phone(): AbstractControl | null {
    return !!this.contacts ? this.contacts.get('phone') : null;
  }

  public formSubmit(): void {
    console.log('Form: ', this.validationForm);
  }
}
