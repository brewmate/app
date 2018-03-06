import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { TermsOfServicePageComponent } from './terms-of-service-page/terms-of-service-page.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'privacy', component: PrivacyPageComponent },
  { path: 'terms-of-service', component: TermsOfServicePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
