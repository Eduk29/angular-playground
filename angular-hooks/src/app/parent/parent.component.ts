import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('This is constructor from ParentComponent');
  }

  ngOnChanges() {
    console.log('This is ngOnChanges from ParentComponent');
  }

  ngOnInit() {
    console.log('This is ngOnInit from ParentComponent');
  }

  ngDoCheck() {
    console.log('This is ngDoCheck from ParentComponent');
  }

  ngAfterContentInit() {
    console.log('This is ngAfterContentInit from ParentComponent');
  }

  ngAfterContentChecked() {
    console.log('This is ngAfterContentChecked from ParentComponent');
  }

  ngAfterViewInit() {
    console.log('This is ngAfterViewInit from ParentComponent');
  }

  ngAfterViewChecked() {
    console.log('This is ngAfterViewChecked from ParentComponent');
  }

  ngOnDestroy() {
    console.log('This is ngOnDestroy from ParentComponent');
  }
}
