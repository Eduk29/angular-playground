import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSimpleInputComponent } from './reactive-form-simple-input.component';

describe('ReactiveFormSimpleInputComponent', () => {
  let component: ReactiveFormSimpleInputComponent;
  let fixture: ComponentFixture<ReactiveFormSimpleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormSimpleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormSimpleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
