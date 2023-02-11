import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsSimpleInputComponent } from './template-driven-forms-simple-input.component';

describe('TemplateDrivenFormsSimpleInputComponent', () => {
  let component: TemplateDrivenFormsSimpleInputComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsSimpleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsSimpleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormsSimpleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
