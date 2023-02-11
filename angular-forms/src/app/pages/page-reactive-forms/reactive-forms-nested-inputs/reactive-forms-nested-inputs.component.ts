import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-forms-nested-inputs',
  templateUrl: './reactive-forms-nested-inputs.component.html',
  styleUrls: ['./reactive-forms-nested-inputs.component.scss'],
})
export class ReactiveFormsNestedInputsComponent implements OnInit {
  public userForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.userForm = this.createForm(formBuilder);
  }

  ngOnInit(): void {
    this.userForm;
  }

  public onSubmitAddress(): void {
    console.log('Form submitted: ', this.userForm.value);
  }

  private createForm(fb: UntypedFormBuilder): UntypedFormGroup {
    return fb.group({
      name: new UntypedFormControl(),
      lastname: new UntypedFormControl(),
      birthday: new UntypedFormControl(),
      address: new UntypedFormGroup({
        street: new UntypedFormControl(),
        number: new UntypedFormControl(),
        state: new UntypedFormControl(),
        country: new UntypedFormControl()
      })
    })
  }
}
