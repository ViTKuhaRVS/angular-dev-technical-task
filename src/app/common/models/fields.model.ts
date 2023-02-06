import { FormControl } from '@angular/forms';

export interface IAuthInputField {
  key: string;
  label: string;
  type: string;
  formControl: FormControl;
  placeholder: string;
}
