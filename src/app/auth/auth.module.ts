import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NoAuthGuard } from './no-auth.guard';
import { RoleGuard } from './role.guard';
import { LoginComponent } from './login/login.component';
import { TokenService } from './token.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService,
    TokenService,
    AuthGuard,
    NoAuthGuard,
    RoleGuard,

  ]
})
export class AuthModule { }
