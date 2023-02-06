import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { LoginFormSmartComponent } from './auth/login-form/login-form.smart.component';
import { RegistrationFormSmartComponent } from './auth/registration-form/registration-form.smart.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
  },
  {
    path: 'shoppingCart',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthService],
  },
  {
    path: 'login',
    component: LoginFormSmartComponent,
  },
  {
    path: 'registration',
    component: RegistrationFormSmartComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
