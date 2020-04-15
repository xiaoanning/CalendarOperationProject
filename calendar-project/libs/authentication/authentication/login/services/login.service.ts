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
    const { name, password } = user;
    const payload = { name, password };
    const url = `${this.apiUrl}`;
    return this.httpClient.post(url, payload);
  }
}
