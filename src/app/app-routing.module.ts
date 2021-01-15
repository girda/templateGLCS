import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GuardServices} from './shared/services/guard.service';
import {KeysService} from './shared/services/keys.service';

import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';

import {LoginPageComponent} from './auth/login-page/login-page.component';
import {MainComponent} from './content/pages/main/main.component';




const keys = new KeysService();

const routes: Routes = [{
  path: '',
  component: AuthLayoutComponent,
  children: [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent}
  ]
},
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'main',
        component: MainComponent,
        canActivate: [GuardServices],
        // data: {role: keys.roles.admin.id}
      }
    ]
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
