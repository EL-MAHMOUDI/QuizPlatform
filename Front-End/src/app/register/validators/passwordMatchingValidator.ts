import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const passwordMatchingValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password= control.get('password');
    const confirmedPassword = control.get('confirmedPassword');
  
    return password && confirmedPassword && password.value !== confirmedPassword.value ? { 'passwordMatching': true } : null;
  };