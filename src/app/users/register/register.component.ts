import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { PasswordValidatorsService } from '../password-validators.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private flash: MatSnackBar,
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder,
    private users: UsersService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      passwordConfirmation: ['', [
        Validators.required,
        Validators.minLength
      ]]
    });
    this.form.setValidators([
      PasswordValidatorsService.matchingPasswords
    ]);
  }

  onSubmit() {
    this.users.registerWith({
      email: this.form.get('email').value,
      password: this.form.get('password').value,
      passwordConfirmation: this.form.get('passwordConfirmation').value
    }).subscribe((success: boolean) => {
      console.log("LOGGED IN");
      if (success) {
        const email = this.auth.userAsPrincipal().email;
        this.flash.open(`Signed up successfully as ${email}.`, 'Ok');
        this.router.navigate(['/tabs']);
      } else {
        this.flash.open('Invalid email or password', 'Ok');
        this.clearForm();
      }
    });
  }

  clearForm() {
    Object.keys(this.form.controls).forEach((field: string) => {
      this.form.controls[field].setValue('');
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  isDisabled(): boolean {
    return !this.form.valid;
  }

}
