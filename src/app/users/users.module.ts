import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared.module';
import { AuthModule } from '../auth/auth.module';
import { RegisterComponent } from './register/register.component';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthModule
  ],
  exports: [
    RegisterComponent
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
