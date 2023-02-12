import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-nested-inputs',
  templateUrl: './reactive-forms-nested-inputs.component.html',
  styleUrls: ['./reactive-forms-nested-inputs.component.scss'],
})
export class ReactiveFormsNestedInputsComponent {
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.createForm(formBuilder);
  }

  public onSubmitAddress(): void {
    console.log('Form submitted: ', this.userForm.value);
  }

  private createForm(fb: FormBuilder): FormGroup {
    return fb.group({
      name: new FormControl<string | null>(null),
      lastname: new FormControl<string | null>(null),
      birthday: new FormControl<string | null>(null),
      address: new FormGroup({
        street: new FormControl<string | null>(null),
        number: new FormControl<number | null>(null),
        state: new FormControl<string | null>(null),
        country: new FormControl<string | null>(null),
      }),
    });
  }
}
