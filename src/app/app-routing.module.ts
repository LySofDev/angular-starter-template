import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { NoAuthGuard } from './auth/no-auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './users/register/register.component';

// EXAMPLE PAGES
import { HomeComponent } from './home/home.component';
// import { TabsComponent } from './tabs/tabs.component';
// import { EditTabComponent } from './tabs/edit-tab/edit-tab.component';
// import { NewTabComponent } from './tabs/new-tab/new-tab.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard] },

  // EXAMPLE STATIC PAGE
  { path: 'home', component: HomeComponent },

  // EXAMPLE RESOURCE PAGES
  // { path: 'tabs', canActivate: [AuthGuard], children: [
  //   { path: '', component: TabsComponent },
  //   { path: ':id/edit', component: EditTabComponent },
  //   { path: 'new', component: NewTabComponent },
  // ] },

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
