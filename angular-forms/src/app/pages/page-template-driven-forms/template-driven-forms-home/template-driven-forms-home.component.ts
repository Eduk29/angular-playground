import { Hero } from './../../../shared/models/hero.model';
import { Component, OnInit } from '@angular/core';
import { PagesMastheadConfig } from 'src/app/configs/pages-masthead.config';
import { IMasthead } from 'src/app/shared/models/masthead.model';

@Component({
  selector: 'app-template-driven-forms-home',
  templateUrl: './template-driven-forms-home.component.html',
  styleUrls: ['./template-driven-forms-home.component.scss'],
})
export class TemplateDrivenFormsHomeComponent {
  public mastheadData: IMasthead =
    PagesMastheadConfig.templateDrivenFormsMastheadData;

  submited: boolean = false;
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model: Hero = {
    id: 18,
    name: 'Dr IQ',
    power: this.powers[0],
    alterEgo: 'Chuck Overstreet',
  };

  constructor() {}

  onSubmit(): void {
    this.submited = true;
    console.log('Submit: ', this.model);
  }

  newHero(): void {
    this.model = {
      id: 42,
      name: '',
      power: '',
    };
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
