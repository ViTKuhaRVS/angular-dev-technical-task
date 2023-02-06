import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormPresentationComponent } from './registration-form.component';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormPresentationComponent;
  let fixture: ComponentFixture<RegistrationFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
