import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthModule } from './auth.module';
import { AuthService } from './auth.service';

@Injectable({
  // providedIn: AuthModule
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  /**
  * Redirect unauthenticated uses to the login route
  */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.auth.userIsAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

}
