import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MatSnackBar} from '@angular/material';
import {FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../auth.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginUserData = {};

  constructor(private auth: AuthService, private snackbar: MatSnackBar, private router: Router) { }

    // tslint:disable-next-line: member-ordering
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

  login() {
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.snackbar.open(res.message, '', {
          duration: 2000,
          panelClass: ['green-snackbar']
        });
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
