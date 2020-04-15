import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { IconModule } from '@ant-design/icons-angular';
import {
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzIconModule,
  NzInputModule,
} from 'ng-zorro-antd';
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
  imports: [
    CommonModule,
    RouterModule,
    NzInputModule,
    NzFormModule,
    FormsModule,
    NzIconModule,
    NzCheckboxModule,
    IconModule,
    ReactiveFormsModule,
    NzButtonModule,
  ],
})
export class AuthenticationModule {}
