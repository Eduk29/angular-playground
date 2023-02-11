import { AbstractControl, ValidatorFn } from '@angular/forms';

export const phoneValidator: ValidatorFn = (control: AbstractControl) => {
  if (
    control.value?.length >= 10 &&
    !preffixShouldStartsWithZero(control.value)
  ) {
    return { invalidPreffix: control.value };
  }

  if (control.value?.length >= 10 && !!phoneStartsWithNine(control.value)) {
    return { invalidPhone: control.value };
  }

  return null;
};

const phoneStartsWithNine = (value: string) => {
  const phone: string = value.substring(3);

  if (phone.charAt(0) === '9') {
    return true;
  }
  return false;
};

const preffixShouldStartsWithZero = (value: string) => {
  const preffix: string = value.substring(0, 2);

  if (preffix.charAt(0) === '0') {
    return true;
  }
  return false;
};
