import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  isAuthenticated(): boolean {
    return this.auth.userIsAuthenticated();
  }

  currentUserEmail(): string {
    return this.auth.userAsPrincipal().email;
  }

  signOut() {
    this.auth.signOutUser();
  }

  signIn() {
    this.router.navigate(['/login']);
  }

}
