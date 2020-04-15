import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = fb.group({
      username: [null, [Validators.required]],
      email: [null],
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
    user.username = this.loginForm.get('username').value;
    user.password = this.loginForm.get('password').value;
    if (this.loginForm.get('email').value) {
      user.email = this.loginForm.get('email').value;
    }
    this.isLoginState
      ? this.loginService.login(user).subscribe(
          (response) => {
            console.log('---> login response: ', response);
          },
          (e) => {
            console.log('---> login error: ', e);
          }
        )
      : this.loginService.register(user).subscribe(
          (response) => {
            console.log('---> register response: ', response);
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
      this.removerControlRequired('email');
      this.removerControlRequired('confirm');
    } else {
      this.setControlRequired('email');
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
}
