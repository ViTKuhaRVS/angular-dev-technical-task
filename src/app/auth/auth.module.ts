import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthHttpService } from './services/auth-http.service';
import { UiCommonModule } from '../common/ui-common.module';
import { LoginFormSmartComponent } from './login-form/login-form.smart.component';
import { LoginFormPresentationComponent } from './login-form/login-form.presentation.component';
import { RegistrationFormSmartComponent } from './registration-form/registration-form.smart.component';
import { RegistrationFormPresentationComponent } from './registration-form/registration-form.presentation.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginFormSmartComponent,
    LoginFormPresentationComponent,
    AuthFormComponent,
    RegistrationFormSmartComponent,
    RegistrationFormPresentationComponent,
  ],
  imports: [
    CommonModule,
    UiCommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  providers: [AuthHttpService],
  entryComponents: [
    LoginFormSmartComponent,
    RegistrationFormSmartComponent,
  ]
})
export class AuthModule { }
