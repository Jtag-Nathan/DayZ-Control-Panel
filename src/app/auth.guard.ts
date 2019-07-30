import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  result: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  async canActivate() {
    const canAvtivateRoute = await this.auth.authJwt().toPromise().then(() => true).catch(() => false);

    if (!canAvtivateRoute) {
      this.auth.logout();
    }

    return canAvtivateRoute;
  }
}
