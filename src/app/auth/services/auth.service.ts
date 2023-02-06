import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService implements CanActivate {
  get authToken(): string {
    return localStorage.getItem('jwt')!;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    if (!this.authToken) {
      alert('Please sign in');
    }
    return !!this.authToken;
  }
}
