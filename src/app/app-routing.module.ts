import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TrackingComponent } from './dashboard/tracking/tracking.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { LogoutComponent } from './dashboard/logout/logout.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: 'dashboard',
  canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'tracking',
        component: TrackingComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      }
    ]
  },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent ];
