import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPagePresentationComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPagePresentationComponent;
  let fixture: ComponentFixture<LoginPagePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPagePresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPagePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
