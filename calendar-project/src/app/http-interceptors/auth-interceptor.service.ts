import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { LoginService } from 'libs/authentication/authentication/login/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  private loginService: LoginService;
  constructor(private injector: Injector) {
    this.loginService = this.injector.get(LoginService);
  }

  private tryInjectToken(request: HttpRequest<any>, next: HttpHandler) {
    const token: string = this.loginService.getToken();
    if (!(request.body instanceof FormData)) {
      request = request.clone({
        setHeaders: { 'Content-Type': 'application/json' },
      });
    }
    if (token) {
      request = request.clone({
        setHeaders: { 'x-access-token': `${token}` },
      });
    }
    return next.handle(request);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return this.tryInjectToken(request, next);
  }
}
