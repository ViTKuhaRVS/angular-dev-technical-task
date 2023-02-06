import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormSmartComponent } from './login-form/login-form.smart.component';
import { RegistrationFormSmartComponent } from './registration-form/registration-form.smart.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormSmartComponent,
  },
  {
    path: 'registration',
    component: RegistrationFormSmartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
