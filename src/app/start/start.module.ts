import { NgModule } from '@angular/core';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { SharedModule } from '../shared.module';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';
import { TermsOfServicePageComponent } from './terms-of-service-page/terms-of-service-page.component';

@NgModule({
  imports: [
    SharedModule,

    StartRoutingModule
  ],
  declarations: [
    StartComponent,
    PrivacyPageComponent,
    TermsOfServicePageComponent
  ]
})
export class StartModule { }
