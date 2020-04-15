import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './models/login.model';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    const user = {} as User;
    user.name = this.loginForm.get('username').value;
    user.password = this.loginForm.get('password').value;
    this.loginService.login(user).subscribe((response) => {
      console.log('---> login response: ', response);
    });
  }
}
