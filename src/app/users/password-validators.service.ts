import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorsService {

  /**
  * Validate that password and confirmation match
  * @param form The abstract form object
  */
  static matchingPasswords(form: AbstractControl) {
    const password = form.get('password').value;
    const passwordConfirmation = form.get('passwordConfirmation').value;
    if (password !== passwordConfirmation) {
      form.get('passwordConfirmation').setErrors({ matchingPasswords: true });
    }
    return null;
  }

}
