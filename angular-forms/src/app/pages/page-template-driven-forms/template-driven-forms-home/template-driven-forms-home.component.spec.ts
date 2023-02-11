import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsHomeComponent } from './template-driven-forms-home.component';

describe('TemplateDrivenFormsHomeComponent', () => {
  let component: TemplateDrivenFormsHomeComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
