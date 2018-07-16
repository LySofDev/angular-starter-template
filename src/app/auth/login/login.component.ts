import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private flash: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    });
  }

  onSubmit() {
    this.auth.authenticateWith({
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }).subscribe((success: boolean) => {
      if (success) {
        const email = this.auth.userAsPrincipal().email;
        this.flash.open(`Signed in successfully as ${email}.`, 'Ok');
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

  goToRegister() {
    this.router.navigate(['/register']);
  }

  isDisabled(): boolean {
    return !this.form.valid;
  }

}
