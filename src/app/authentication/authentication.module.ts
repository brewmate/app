import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { SecurityModule } from '../core/security';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
    SecurityModule,

    AuthenticationRoutingModule,
  ],
  declarations: [
    LoginPageComponent,
  ]
})
export class AuthenticationModule {}
