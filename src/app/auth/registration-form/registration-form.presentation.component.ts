import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { IAuthInputField } from '../../common/models/fields.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IActionButton } from '../../common/models/buttons.model';
import { Router } from '@angular/router';
import { UserDto } from '../models/user.dto';

@Component({
  selector: 'app-registration-form-presentation',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormPresentationComponent {
  @Output()
  emitRegisterUser: EventEmitter<UserDto> = new EventEmitter<UserDto>();

  inputFields: IAuthInputField[] = [
    {
      key: 'email',
      label: 'Email',
      type: 'text',
      formControl: new FormControl('', [Validators.required, Validators.email]),
      placeholder: 'Enter your email',
    },
    {
      key: 'name',
      label: 'User name',
      type: 'text',
      formControl: new FormControl('', [Validators.required]),
      placeholder: 'Enter your name',
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
      label: 'Sign up',
      class: 'primary',
      isSubmit: true,
      handler: (formGroup: FormGroup) => {
        this.emitRegisterUser.emit(formGroup.value);
      }
    },
    {
      label: 'Sign in',
      class: '',
      handler: () => {
        this.router.navigateByUrl('/login').then();
      }
    },
  ];

  constructor(private router: Router) {}
}
