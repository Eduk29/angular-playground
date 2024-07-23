import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() name!: string;

  constructor() {
    console.log('This is constructor from ChildComponent');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('This is ngOnChanges from ChildComponent: ', changes);
  }

  ngOnInit() {
    console.log('This is ngOnInit from ChildComponent: ', this.name);
  }

  ngDoCheck() {
    console.log('This is ngDoCheck from ChildComponent');
  }

  ngAfterContentInit() {
    console.log('This is ngAfterContentInit from ChildComponent');
  }

  ngAfterContentChecked() {
    console.log('This is ngAfterContentChecked from ChildComponent');
  }

  ngAfterViewInit() {
    console.log('This is ngAfterViewInit from ChildComponent');
  }

  ngAfterViewChecked() {
    console.log('This is ngAfterViewChecked from ChildComponent');
  }

  ngOnDestroy() {
    console.log('This is ngOnDestroy from ChildComponent');
  }
}
