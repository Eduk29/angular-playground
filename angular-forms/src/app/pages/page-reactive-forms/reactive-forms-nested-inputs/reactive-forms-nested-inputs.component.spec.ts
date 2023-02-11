import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsNestedInputsComponent } from './reactive-forms-nested-inputs.component';

describe('ReactiveFormsNestedInputsComponent', () => {
  let component: ReactiveFormsNestedInputsComponent;
  let fixture: ComponentFixture<ReactiveFormsNestedInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsNestedInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsNestedInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
