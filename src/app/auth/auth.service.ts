import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CookiesService } from '../cookies/cookies.service';
import { Principal } from './principal';
import { LoginRequest } from './auth.requests';
import { LoginResponse } from './auth.response';
import { Token } from './token';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private cookies: CookiesService,
    private storedToken: TokenService,
    private http: HttpClient
  ) { }

  getAuthorizedHeaders(): HttpHeaders {
    const token: Token = this.storedToken.retrieve();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${token.prefix} ${token.payload}`
    });
  }

  /**
  * Returns true if a auth token is stored
  */
  userIsAuthenticated(): boolean {
    return this.storedToken.hasToken();
  }

  /**
  * Returns the principal derived from the stored auth token
  */
  userAsPrincipal(): Principal {
    return this.storedToken.decode();
  }

  /**
  * Attempt to authenticate the user
  */
  authenticateWith(request: LoginRequest): Observable<boolean> {
    return this.http.post(
      `${environment.apiUrl}/users/authenticate`,
      { authenticate: request }
    ).pipe(
      tap((response: LoginResponse) => this.storedToken.store(response)),
      map(_ => true),
      catchError((error: any) => of(false))
    );
  }

  signOutUser() {
    this.storedToken.clear();
  }

}
