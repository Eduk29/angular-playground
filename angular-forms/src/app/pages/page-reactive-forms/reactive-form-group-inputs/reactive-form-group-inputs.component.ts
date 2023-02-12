import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-group-inputs',
  templateUrl: './reactive-form-group-inputs.component.html',
  styleUrls: ['./reactive-form-group-inputs.component.scss'],
})
export class ReactiveFormGroupInputsComponent {
  public groupInputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.groupInputForm = formBuilder.group({
      inputName: new FormControl<string | null>(''),
      inputLastName: new FormControl<string | null>(''),
    });
  }

  public formSubmit(): void {
    console.log(this.groupInputForm.value);
  }
}
