import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'InteractiveLogin',
    pathMatch: 'full'
  },
  {
    path:'InteractiveLogin',
    component: LoginComponent
  },
  {
    path:'signin',
    component: PasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
