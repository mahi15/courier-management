import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path:"",
        component:HomeComponent
      },
      {
      path:"login",
        component:LoginComponent
      },
      {
        path:"admin",
          component:AdminComponent
        }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
