import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const authenticationRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule],
})
export class AuthenticationModule {}
