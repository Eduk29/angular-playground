import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-group-inputs',
  templateUrl: './reactive-form-group-inputs.component.html',
  styleUrls: ['./reactive-form-group-inputs.component.scss'],
})
export class ReactiveFormGroupInputsComponent implements OnInit {
  public groupInputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.groupInputForm = formBuilder.group({
      inputName: new FormControl(''),
      inputLastName: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  public formSubmit(): void {
    console.log(this.groupInputForm.value);

  }
}
