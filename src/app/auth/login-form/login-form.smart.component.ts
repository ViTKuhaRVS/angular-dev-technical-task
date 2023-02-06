import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUserAction } from '../state-management/auth.actions';
import { UserDto } from '../models/user.dto';

@Component({
  selector: 'app-login-form-smart',
  template: `<app-login-form-presentation (emitUserSignIn)="onSignIn($event)"></app-login-form-presentation>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormSmartComponent {
  constructor(private store: Store) {
  }

  onSignIn(user: UserDto): void {
    this.store.dispatch(loginUserAction({ payload: user }));
  }
}
