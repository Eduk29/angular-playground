import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormGroupInputsComponent } from './reactive-form-group-inputs.component';

describe('ReactiveFormGroupInputsComponent', () => {
  let component: ReactiveFormGroupInputsComponent;
  let fixture: ComponentFixture<ReactiveFormGroupInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormGroupInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormGroupInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
