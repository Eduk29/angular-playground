import { Component } from '@angular/core';

import { PageNavigationConfig } from './../../configs/page-navigation-links.config';
import { PagesMastheadConfig } from './../../configs/pages-masthead.config';
import { IMasthead } from './../../shared/models/masthead.model';
import { PageNavigation } from './../../shared/models/page-navigation.model';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent {
  public pageNavigationList: PageNavigation[];
  public mastheadDataConfig: IMasthead = PagesMastheadConfig.homeMastheadData;

  constructor() {
    this.pageNavigationList = PageNavigationConfig;
  }
}
