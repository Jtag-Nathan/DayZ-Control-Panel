import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService} from '../auth.service';
import { Observable, of, Observer } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  press() {

  }
}
