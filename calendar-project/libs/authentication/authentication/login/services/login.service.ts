import { Injectable, Injector } from '@angular/core';
import { User } from '../models/login.model';
import { BaseLoginService } from './base-login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseLoginService {
  constructor(injector: Injector) {
    super(injector);
  }

  login(user: User) {
    const { username, password } = user;
    const payload = { username, password };
    const url = `${this.apiUrl}login`;
    return this.httpClient.post(url, payload, { observe: 'response' });
  }

  register(user: User) {
    const { username, email, password } = user;
    const payload = { username, email, password };
    const url = `${this.apiUrl}register`;
    console.log('---> usl: ', url);
    return this.httpClient.post(url, payload, { observe: 'response' });
  }
}
