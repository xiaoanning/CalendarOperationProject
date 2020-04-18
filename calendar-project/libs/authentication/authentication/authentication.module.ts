import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';
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
  imports: [CommonModule, RouterModule, SharedModule],
})
export class AuthenticationModule {}
