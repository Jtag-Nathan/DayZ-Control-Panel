import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'http://localhost:3000/users/register';
  private loginUrl = 'http://localhost:3000/users/authenticate';
  private jwtauthUrl = 'http://localhost:3000/users/authenticateJWT';

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }

  authJwt() {
    return this.http.get<any>(this.jwtauthUrl);
  }

  expiredJwt() {
    const token = this.getToken();
    try {
      const decoded = token && jwtHelper.decodeToken(token);
      const myExp = !(decoded && (decoded as { exp: number }).exp > Date.now() / 1000);
      console.log('token expired: ' + myExp);
      return myExp;
    } catch(e) {
      this.logout();
    }
  }

  logout() {
    if (localStorage.getItem('token') !== null) {
      localStorage.removeItem('token');
    }
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
