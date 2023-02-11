import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-group-inputs',
  templateUrl: './reactive-form-group-inputs.component.html',
  styleUrls: ['./reactive-form-group-inputs.component.scss'],
})
export class ReactiveFormGroupInputsComponent implements OnInit {
  public groupInputForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.groupInputForm = formBuilder.group({
      inputName: new UntypedFormControl(''),
      inputLastName: new UntypedFormControl(''),
    });
  }

  ngOnInit(): void {}

  public formSubmit(): void {
    console.log(this.groupInputForm.value);

  }
}
