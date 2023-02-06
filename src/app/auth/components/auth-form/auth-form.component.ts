import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAuthInputField } from '../../../common/models/fields.model';
import { IActionButton } from '../../../common/models/buttons.model';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent implements OnChanges {
  @Input()
  formTitle: string = 'Auth form';

  @Input()
  formFields: IAuthInputField[] = [];

  @Input()
  actionButtons: IActionButton[] = [];

  authFormGroup: FormGroup = new FormGroup({});

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['formFields'] && this.formFields) {
      this.formFields.forEach(field => {
        this.authFormGroup.addControl(field.key, field.formControl);
      })
    }
  }
}
