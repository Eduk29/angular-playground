import {
  AbstractControl,
  ValidationErrors,
  Validator,
  ValidatorFn,
  FormControl,
} from '@angular/forms';
import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: PasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective implements Validator {
  public validator: ValidatorFn;

  constructor() {
    this.validator = this.passwordValidator();
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    return this.validator(control);
  }

  private passwordIsValid(value: string): boolean {
    return value != '1234';
  }

  private passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value != null && control.value !== '') {
        if (this.passwordIsValid(control.value)) {
          return null;
        } else {
          return { passwordValidator: false };
        }
      } else {
        return null;
      }
    };
  }
}
