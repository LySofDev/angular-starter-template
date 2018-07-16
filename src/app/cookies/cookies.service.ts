import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  store(key: string, value: string) {
    Cookies.set(key, value);
  }

  retrieve(key: string): string {
    return Cookies.get(key);
  }

  remove(key: string) {
    Cookies.remove(key);
  }
  
}
