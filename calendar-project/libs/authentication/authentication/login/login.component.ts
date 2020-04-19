import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarkControlState, User } from './models/login.model';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoginState = true;
  isLoading = false;
  showPassWord = false;
  @HostBinding('class.out') isOut = false;

  constructor(
    fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      username: [null],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirm: [null],
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    this.isLoading = this.loginForm.valid;
    this.markFormControlsState(this.loginForm, MarkControlState.DIRTY);
    //this.loginForm.disable();
    const user = {} as User;
    user.email = this.loginForm.get('email').value;
    user.password = this.loginForm.get('password').value;
    if (this.loginForm.get('username').value) {
      user.username = this.loginForm.get('username').value;
    }
    this.isLoginState
      ? this.loginService.login(user).subscribe(
          (response) => {
            this.isOut = true;
            // tslint:disable-next-line: no-string-literal
            const { username, email, password } = response.body['data'];
            // tslint:disable-next-line: no-string-literal
            const token = response.body['token'];
            const currentUser = { username, email, password };
            this.loginService.saveUserInLocalStorage(currentUser);
            this.loginService.saveToken(token);
            this.routerNavigate();
          },
          (e) => {
            console.log('---> login error: ', e);
          }
        )
      : this.loginService.register(user).subscribe(
          (response) => {
            this.isOut = true;
            // tslint:disable-next-line: no-string-literal
            // const { username, email, password } = response.body['data'];
            // const currentUser = { username, email, password };
            // this.loginService.saveUserInLocalStorage(currentUser);
            setTimeout(() => {
              location.reload();
            }, 2000);
          },
          (e) => {
            console.log('---> register error: ', e);
          }
        );
  }

  toggleLoginAndRegister(): void {
    this.isLoginState = !this.isLoginState;
    this.loginForm.enable();
    if (this.isLoginState) {
      this.removerControlRequired('username');
      this.removerControlRequired('confirm');
    } else {
      this.setControlRequired('username');
      this.setControlRequired('confirm');
    }
  }

  setControlRequired(controlName: string): void {
    this.loginForm.get(controlName).setValidators(Validators.required);
  }

  removerControlRequired(controlName: string): void {
    this.loginForm.get(controlName).clearValidators();
    this.loginForm.get(controlName).markAsPristine();
  }

  private markFormControlsState(
    formGroup: FormGroup,
    controlState: MarkControlState
  ): void {
    for (const key in formGroup.controls) {
      if (formGroup.get(key)) {
        if (controlState === MarkControlState.DIRTY) {
          formGroup.get(key).markAsDirty();
          formGroup.get(key).updateValueAndValidity();
        } else if (controlState === MarkControlState.RESET) {
          formGroup.get(key).reset();
        }
      }
    }
  }

  routerNavigate() {
    setTimeout(() => {
      this.router.navigate(['../../home']);
    }, 2000);
  }
}
