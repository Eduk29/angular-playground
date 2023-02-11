import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { phoneValidator } from '../../../shared/validators/phone.validator';

@Component({
  selector: 'app-reactive-forms-validation',
  templateUrl: './reactive-forms-validation.component.html',
  styleUrls: ['./reactive-forms-validation.component.scss'],
})
export class ReactiveFormsValidationComponent {
  public validationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.validationForm = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      birthday: new FormControl(''),
      age: new FormControl(''),
      contacts: formBuilder.group(
        {
          address: new FormControl(''),
          state: new FormControl(''),
          city: new FormControl(''),
          zipCode: new FormControl(''),
          email: new FormControl(''),
          phone: new FormControl('', [
            Validators.required,
            Validators.minLength(10),
            phoneValidator,
          ]),
          cellphone: new FormControl(''),
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