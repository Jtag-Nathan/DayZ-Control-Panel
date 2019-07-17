import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'http://localhost:3000/users/register';
  private loginUrl = 'http://localhost:3000/users/authenticate';

  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post(this.registerUrl, user);
  }

  loginUser(user) {
    return this.http.post(this.loginUrl, user);
  }
}
