import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard, SecurityModule, UserRedirectGuard } from './core/security';

const routes: Routes = [
  // { path: '', redirectTo: 'start', pathMatch: 'full', canActivate: [UserRedirectGuard] },
  { path: '', loadChildren: 'app/start/start.module#StartModule' },
  { path: 'auth', loadChildren: 'app/authentication/authentication.module#AuthenticationModule' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', canActivate: [AuthenticatedGuard] },
];

@NgModule({
  imports: [
    SecurityModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
