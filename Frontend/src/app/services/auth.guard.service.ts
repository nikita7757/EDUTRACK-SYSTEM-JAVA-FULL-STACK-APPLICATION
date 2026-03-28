import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('token');

    if (!isLoggedIn) {
      this.router.navigateByUrl('/login', { replaceUrl: true });
      return false;
    }
    return true;
  }
}
