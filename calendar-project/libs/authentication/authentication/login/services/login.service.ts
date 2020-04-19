import { Injectable, Injector } from '@angular/core';
import { User } from '../models/login.model';
import { BaseLoginService } from './base-login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseLoginService {
  private currentUser: User;
  private token: string;

  constructor(injector: Injector) {
    super(injector);
  }

  login(user: User) {
    const { email, password } = user;
    const payload = { email, password };
    const url = `${this.apiUrl}login`;
    return this.httpClient.post(url, payload, { observe: 'response' });
  }

  register(user: User) {
    const { username, email, password } = user;
    const payload = { username, email, password };
    const url = `${this.apiUrl}register`;
    return this.httpClient.post(url, payload, { observe: 'response' });
  }

  signout() {
    this.removeUserInLocalStorage();
    this.removeToken();
    this.setCurrentUser(null);
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser() {
    localStorage.getItem('user')
      ? (this.currentUser = JSON.parse(localStorage.getItem('user')))
      : (this.currentUser = null);
    return this.currentUser;
  }

  getToken() {
    localStorage.getItem('token')
      ? (this.token = localStorage.getItem('token'))
      : (this.token = null);
    return this.token;
  }

  saveUserInLocalStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.setCurrentUser(user);
  }

  saveToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  removeUserInLocalStorage() {
    localStorage.removeItem('user');
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
