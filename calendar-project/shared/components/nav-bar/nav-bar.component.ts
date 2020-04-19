import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'libs/authentication/authentication/login/models/login.model';
import { LoginService } from 'libs/authentication/authentication/login/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  currentTime;
  user: User;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.currentTime = new Date();
    this.user = this.loginService.getCurrentUser();
  }

  signout() {
    this.loginService.signout();
    setTimeout(() => {
      this.redirectToLogin();
    }, 1000);
  }

  redirectToLogin() {
    this.router.navigate(['../auth/login']);
  }

  navigateToSearch() {
    this.router.navigate(['../search']);
  }
}
