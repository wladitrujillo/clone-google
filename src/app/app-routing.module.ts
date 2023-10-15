import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'store',
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
  {
    path:'store',
    component: StoreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
