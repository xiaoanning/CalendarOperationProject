import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationRoutes } from 'libs/authentication/authentication/authentication.module';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
  },
  {
    path: 'home',
    component: UserComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'auth',
    children: authenticationRoutes,
  },
  {
    path: 'login',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
