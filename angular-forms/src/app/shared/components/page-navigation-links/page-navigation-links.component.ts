import { PageNavigation } from './../../models/page-navigation.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-navigation-links',
  templateUrl: './page-navigation-links.component.html',
  styleUrls: ['./page-navigation-links.component.scss']
})
export class PageNavigationLinksComponent {

  @Input() pageNavigationList?: PageNavigation[];

  constructor() { }

  public get displayNavigationLinks(): boolean {
    return !!this.pageNavigationList && this.pageNavigationList.length > 0;
  }

}
