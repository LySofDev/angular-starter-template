import { Injectable } from '@angular/core';
import * as decodeToken from 'jwt-decode';
import { CookiesService } from '../cookies/cookies.service';
import { Token } from './token';
import { Principal } from './principal';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private cookies: CookiesService
  ) { }

  hasToken(): boolean {
    return this.isValid(this.retrieve());
  }

  store(token: Token) {
    this.cookies.store('token-prefix', token.prefix);
    this.cookies.store('token-payload', token.payload);
  }

  retrieve(): Token {
    return {
      prefix: this.cookies.retrieve('token-prefix'),
      payload: this.cookies.retrieve('token-payload')
    }
  }

  decode(): Principal {
    try {
      return decodeToken(this.retrieve().payload).sub;
    } catch {
      return null;
    }
  }

  clear() {
    this.cookies.remove('token-prefix');
    this.cookies.remove('token-payload');
  }

  isValid(token: Token): boolean {
    return token.prefix &&
      token.prefix.length > 0 &&
      token.payload &&
      token.payload.length > 0;
  }

}
