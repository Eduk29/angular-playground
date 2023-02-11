import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { PagesMastheadConfig } from 'src/app/configs/pages-masthead.config';

import { IMasthead } from '../../../shared/models/masthead.model';

@Component({
  templateUrl: './reactive-forms-home.component.html',
  styleUrls: ['./reactive-forms-home.component.scss'],
})
export class ReactiveFormsHomeComponent {
  public mastheadData: IMasthead =
    PagesMastheadConfig.reactiveFormsMastheadData;

  name = new UntypedFormControl('');
  userForm: UntypedFormGroup;
  userProfileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });
  profileForm = new UntypedFormGroup({
    firstName: new UntypedFormControl(''),
    lastName: new UntypedFormControl(''),
  });
  addressForm = new UntypedFormGroup({
    address: new UntypedFormGroup({
      street: new UntypedFormControl(''),
      city: new UntypedFormControl(''),
      state: new UntypedFormControl(''),
      zip: new UntypedFormControl(''),
    }),
  });

  constructor(private formBuilder: UntypedFormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
    });
  }

  updateName(): void {
    this.name.setValue('Eduardo Marques');
  }

  updateProfileForm(): void {
    this.profileForm.patchValue({
      firstName: 'Eduardo',
      lastName: 'Marques',
    });
  }

  updateAddressForm(): void {
    this.addressForm.patchValue({
      address: {
        street: 'Rua do Sol',
        city: 'São Paulo',
        state: 'São Paulo',
        zip: '04587-256',
      },
    });
  }

  updateUserForm(): void {
    this.userForm.patchValue({
      firstName: 'Eduardo',
      lastName: 'Marques',
      address: {
        street: 'Rua da Lua',
        city: 'São Paulo',
        state: 'São Paulo',
        zip: '01487-412',
      },
    });
  }

  updateUserProfileForm(): void {
    this.userProfileForm.patchValue({
      firstName: 'Eduardo',
      lastName: 'Marques',
      address: {
        street: 'Rua da Lua',
        city: 'São Paulo',
        state: 'São Paulo',
        zip: '01487-412',
      },
    });
  }

  onSubmit(): void {
    console.log('Valores: ', this.profileForm.value);
  }

  onSubmitAddress(): void {
    console.log('Valores: ', this.addressForm.value);
  }

  onSubmitUser(): void {
    console.log('Valore: ', this.userForm.value);
  }

  onSubmitUserProfileForm(): void {
    console.log('Valore: ', this.userProfileForm.value);
  }
}
