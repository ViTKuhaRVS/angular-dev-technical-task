import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDto } from '../models/user.dto';
import { registerUserAction } from '../state-management/auth.actions';

@Component({
  selector: 'app-registration-form-smart',
  template: `<app-registration-form-presentation
      (emitRegisterUser)="registerUser($event)"
    ></app-registration-form-presentation>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormSmartComponent {
  constructor(private store: Store) {}

  registerUser(userInfo: UserDto): void {
    this.store.dispatch(registerUserAction({ payload: { id: Math.random(), ...userInfo } }));
  }
}
