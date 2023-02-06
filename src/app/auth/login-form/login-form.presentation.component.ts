import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAuthInputField } from '../../common/models/fields.model';
import { IActionButton } from '../../common/models/buttons.model';
import { Router } from '@angular/router';
import { UserDto } from '../models/user.dto';

@Component({
  selector: 'app-login-form-presentation',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormPresentationComponent {
  @Output()
  emitUserSignIn: EventEmitter<UserDto> = new EventEmitter<UserDto>();

  inputFields: IAuthInputField[] = [
    {
      key: 'email',
      label: 'User email',
      type: 'text',
      formControl: new FormControl('', [Validators.required, Validators.email]),
      placeholder: 'Enter your email',
    },
    {
      key: 'password',
      label: 'User password',
      type: 'password',
      formControl: new FormControl('', [Validators.required]),
      placeholder: 'Enter your password',
    },
  ];

  actionButtons: IActionButton[] = [
    {
      label: 'Sign in',
      class: 'primary',
      isSubmit: true,
      handler: (formGroup: FormGroup) => {
        this.emitUserSignIn.emit(formGroup.value);
      }
    },
    {
      label: 'Sign up',
      class: '',
      handler: () => {
        this.router.navigateByUrl('/registration').then();
      }
    },
  ];

  constructor(private router: Router) {
  }
}
