import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-forms-nested-inputs',
  templateUrl: './reactive-forms-nested-inputs.component.html',
  styleUrls: ['./reactive-forms-nested-inputs.component.scss'],
})
export class ReactiveFormsNestedInputsComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.createForm(formBuilder);
  }

  ngOnInit(): void {
    this.userForm;
  }

  public onSubmitAddress(): void {
    console.log('Form submitted: ', this.userForm.value);
  }

  private createForm(fb: FormBuilder): FormGroup {
    return fb.group({
      name: new FormControl(),
      lastname: new FormControl(),
      birthday: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        number: new FormControl(),
        state: new FormControl(),
        country: new FormControl()
      })
    })
  }
}
