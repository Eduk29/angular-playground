import { Component, Input } from '@angular/core';

import { IMasthead } from './../../models/masthead.model';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
})
export class MastheadComponent {
  @Input() mastheadData?: IMasthead;
  @Input() displayBack?: boolean = false;

  constructor() {}

  public get mastheadGridClass(): string {
    return !!this.displayBack ? 'col-10' : 'col-12';
  }

  public back(): void {
    history.back();
  }
}
